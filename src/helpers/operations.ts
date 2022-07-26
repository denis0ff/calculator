import { AddCommand, DivCommand, MulCommand, ResDivCommand, SubCommand, Calculator } from '.';

export const getCommand = (sign: string, [x, y]: string[]) => {
  switch (sign) {
    case '+': {
      return new AddCommand(+x, +y);
    }
    case '-': {
      return new SubCommand(+x, +y);
    }
    case '*': {
      return new MulCommand(+x, +y);
    }
    case '/': {
      return new DivCommand(+x, +y);
    }
    case '%': {
      return new ResDivCommand(+x, +y);
    }
    default:
      return null;
  }
};

export const calculateExpression = (expression: string, calculator: Calculator) => {
  const signs = expression.split(' ');
  for (let i = 1; i < signs.length - 1; i += 2) {
    if (signs.length <= 1) break;
    const command = getCommand(signs[i], [signs[i - 1], signs[i + 1]]);
    if (command) calculator.execute(command);
    signs.splice(i - 1, 3, calculator.getCurrent());
    i = 1;
  }
  return signs[0];
};
