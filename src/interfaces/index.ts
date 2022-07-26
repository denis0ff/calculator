export type Actions = {
  [x: string]: (y: string) => void;
  digit: (item: string) => void;
  operand: (item: string) => void;
};
