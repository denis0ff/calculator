export type SetCalculatorPayload = {
  type: string;
  char: string;
};

export type CalculatorState = {
  displayValue: string;
  displayExpression: string;
  isUpdatedExpression: boolean;
  isCalculated: boolean;
  history: string[];
};

export interface HomeClassProps extends CalculatorState {
  setCalculator: (action: SetCalculatorPayload) => void;
  clearHistory: () => void;
}

export type ClassComponentState = {
  calculator: CalculatorState;
};

export type ThemeContextType = {
  theme: { [x: string]: string };
  currentTheme: string;
  dispatch: (theme: string) => void;
};
