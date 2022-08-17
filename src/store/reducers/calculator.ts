import {
  addValueToExpression,
  addDotToValue,
  negateValue,
  closeBracket,
  openBracket,
  calculateExpression,
  resolveBrackets,
  validateValue,
} from '@utils';
import { CalculatorState, SetCalculatorPayload } from '@interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CalculatorState = {
  displayValue: '0',
  displayExpression: '',
  isUpdatedExpression: true,
  isCalculated: false,
  history: [],
};

export const calcSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setCalculator(state, { payload }: PayloadAction<SetCalculatorPayload>) {
      const { type, char } = payload;
      if (state.isCalculated) {
        state.displayExpression = '';
      }
      const { displayExpression: prevExpression } = state;
      switch (type) {
        case 'digit': {
          state.displayValue = state.isUpdatedExpression
            ? char
            : validateValue(state.displayValue + char);
          break;
        }
        case 'operand': {
          if (/error/i.test(state.displayValue)) {
            state.displayValue = '0';
            break;
          }
          state.displayExpression = `${state.displayExpression}${addValueToExpression(
            state.displayValue,
            state.displayExpression
          )} ${char} `;
          state.displayValue = '0';
          break;
        }
        case 'left_bracket': {
          state.displayExpression = openBracket(state.displayExpression);
          break;
        }
        case 'right_bracket': {
          state.displayExpression = closeBracket(state.displayExpression, state.displayValue);
          state.displayValue = '0';
          break;
        }
        case 'dot': {
          state.displayValue = state.isCalculated ? '.' : addDotToValue(state.displayValue);
          break;
        }
        case 'negate': {
          if (/error/i.test(state.displayValue)) {
            state.displayValue = '0';
            break;
          }
          state.displayValue = negateValue(state.displayValue);
          break;
        }
        case 'clear_value': {
          state.displayValue = '0';
          break;
        }
        case 'clear_exp': {
          state.displayValue = '0';
          state.displayExpression = '';
          state.isCalculated = true;
          break;
        }
        case 'result': {
          if (/error/i.test(state.displayValue)) {
            state.displayValue = '0';
            break;
          }
          const expression = state.displayExpression
            ? resolveBrackets(`${state.displayExpression}${state.displayValue}`)
            : resolveBrackets(`${state.displayValue} + ${state.displayValue}`);
          const result = calculateExpression(expression);
          if (result === 'Infinity') state.displayValue = 'Error. Memory overflow';
          else if (result === 'NaN') state.displayValue = 'Error. Result cannot be determined';
          else state.displayValue = result;
          state.history.push(`${expression} = ${state.displayValue}`);
          state.displayExpression = `${expression} =`;
          break;
        }
        default:
          return state;
      }
      state.isUpdatedExpression =
        state.displayExpression !== prevExpression ||
        type === 'clear_value' ||
        type === 'clear_exp';
      state.isCalculated = type === 'result';
    },
    clearHistory(state) {
      state.history = [];
    },
    clearAll(state) {
      state.history = [];
      state.displayValue = '0';
      state.displayExpression = '';
      state.isUpdatedExpression = true;
    },
  },
});

export const { setCalculator, clearHistory, clearAll } = calcSlice.actions;

export default calcSlice.reducer;
