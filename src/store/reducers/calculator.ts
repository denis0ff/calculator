import {
  addValueToExpression,
  addDotToValue,
  negateValue,
  closeBracket,
  openBracket,
  calculateExpression,
  resolveBrackets,
} from '@helpers/index';
import { CalculatorState, SetStateAction } from '@interfaces/.';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CalculatorState = {
  displayValue: '0',
  displayExpression: '',
  isCalculated: true,
  history: [],
};

export const calcSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setState(state, { payload }: PayloadAction<SetStateAction>) {
      const { type, char } = payload;
      switch (type) {
        case 'digit': {
          state.displayValue = state.isCalculated ? char : state.displayValue + char;
          state.isCalculated = false;
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
          state.isCalculated = true;
          break;
        }
        case 'left_bracket': {
          state.displayExpression = openBracket(state.displayExpression);
          state.isCalculated = true;
          break;
        }
        case 'right_bracket': {
          state.displayExpression = closeBracket(state.displayExpression, state.displayValue);
          state.displayValue = '0';
          state.isCalculated = true;
          break;
        }
        case 'dot': {
          state.displayValue = addDotToValue(state.displayValue);
          state.isCalculated = false;
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
          state.isCalculated = true;
          break;
        }
        case 'clear_exp': {
          state.displayValue = '0';
          state.displayExpression = '';
          state.isCalculated = true;
          break;
        }
        case 'result': {
          const expression = state.displayExpression
            ? resolveBrackets(`${state.displayExpression}${state.displayValue}`)
            : resolveBrackets(`${state.displayValue} + ${state.displayValue}`);
          const result = calculateExpression(expression);
          if (result === 'Infinity') state.displayValue = 'Error. Memory overflow';
          else if (result === 'NaN') state.displayValue = 'Error. Result cannot be determined';
          else state.displayValue = result;
          state.history.push(expression);
          state.displayExpression = '';
          state.isCalculated = true;
          break;
        }
        default:
          return state;
      }
    },
    clearHistory(state) {
      state.history = [];
    },
    clearAll(state) {
      state.history = [];
      state.displayValue = '0';
      state.displayExpression = '';
      state.isCalculated = true;
    },
  },
});

export const { setState, clearHistory, clearAll } = calcSlice.actions;

export default calcSlice.reducer;
