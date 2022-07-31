export type SetStateAction = {
  type: string;
  char: string;
};

export type CalculatorState = {
  displayValue: string;
  displayExpression: string;
  isCalculated: boolean;
};

export type HistoryState = {
  history: string[];
};

export interface HomeClassProps extends CalculatorState, HistoryState {
  setState: (action: SetStateAction) => void;
  setResult: (action: string) => void;
  addHistory: (action: string) => void;
  clearHistory: () => void;
}

export type ClassComponentState = {
  calculator: CalculatorState;
  history: HistoryState;
};
