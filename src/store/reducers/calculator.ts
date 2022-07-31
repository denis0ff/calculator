import {
  addValueToExpression,
  addDotToValue,
  negateValue,
  closeBracket,
  openBracket,
} from '@helpers/index';
import { CalculatorState, SetStateAction } from '@interfaces/.';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CalculatorState = {
  displayValue: '0',
  displayExpression: '',
  isCalculated: true,
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
        default:
          return state;
      }
    },
    setResult(state, { payload }: PayloadAction<string>) {
      state.displayValue = payload;
      state.displayExpression = '';
      state.isCalculated = true;
    },
  },
});

export const { setState, setResult } = calcSlice.actions;

export default calcSlice.reducer;
