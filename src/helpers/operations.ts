import { Calculator, getCommand } from '.';

export const calculateSimpleExpression = (expression: string, calculator: Calculator) => {
  const signs = expression.trim().split(' ');
  for (let i = 1; i < signs.length - 1; i += 1) {
    if (signs.length <= 1) break;
    const command = getCommand(signs[i], [signs[i - 1], signs[i + 1]]);
    if (command) calculator.execute(command);
    signs.splice(i - 1, 3, calculator.getCurrent());
    i = 0;
  }
  return signs[0];
};

export const negateValue = (value: string) =>
  Number(value) > 0 ? `-${value}` : Number(value) === 0 ? value : value.slice(1);

export const addValueToExpression = (value: string, expression: string) => {
  const piece = Number(value) < 0 ? `(${value})` : value;
  return expression.slice(-1) === ')' ? '' : piece;
};

export const addDotToValue = (value: string) => (/\./.test(value) ? value : `${value}.`);

export const autoCloseBrackets = (expression: string) => {
  const { length: left } = expression.match(/[\(]/g) ?? [];
  const { length: right } = expression.match(/[\)]/g) ?? [];
  const closeBrackets = ' )'.repeat(left - right);
  return `${expression}${closeBrackets}`;
};

export const calculateExpression = (expression: string, calculator: Calculator): string => {
  return (function calculate(expression: string): string {
    if (!/[\(\)]/.test(expression)) {
      return calculateSimpleExpression(expression, calculator);
    }
    const array = expression.split('');
    let start = null;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === '(') {
        start = i;
      }
      if (array[i] === ')' && start !== null) {
        const piece = calculate(array.slice(start + 1, i).join(''));
        array.splice(start, i - start + 1, piece);
        i = -1;
      }
    }
    return calculate(array.join(''));
  })(autoCloseBrackets(expression));
};
