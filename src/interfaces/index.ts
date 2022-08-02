export type SetStateAction = {
  type: string;
  char: string;
};

export type CalculatorState = {
  displayValue: string;
  displayExpression: string;
  isCalculated: boolean;
  history: string[];
};

export interface HomeClassProps extends CalculatorState {
  setState: (action: SetStateAction) => void;
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
