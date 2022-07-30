import {
  addValueToExpression,
  addDotToValue,
  calculateExpression,
  Calculator,
  negateValue,
} from '@helpers/index';
import { SetStateAction } from '@interfaces/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type State = {
  displayValue: string;
  displayExpression: string;
  isCalculated: boolean;
};

type ClassComponentState = { calculator: State };

const initialState: State = {
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
          state.displayExpression = `${state.displayExpression}${char}`;
          state.isCalculated = true;
          break;
        }
        case 'right_bracket': {
          state.displayExpression = `${state.displayExpression}${state.displayValue}${char}`;
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
        default:
          return state;
      }
    },
    setResult(state, { payload }: PayloadAction<Calculator>) {
      state.displayValue = calculateExpression(
        `${state.displayExpression}${state.displayValue}`,
        payload
      );
      state.displayExpression = '';
      state.isCalculated = true;
    },
  },
});

export const { setState, setResult } = calcSlice.actions;

export const mapStateToProps = ({ calculator }: ClassComponentState) => ({ ...calculator });

export const mapDispatchToProps = { setState, setResult };

export default calcSlice.reducer;
