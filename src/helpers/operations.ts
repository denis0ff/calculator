import { Calculator, getCommand } from '.';

const findOperandIndex = (signs: string[]) => {
  const idx = signs.findIndex((sign) => /[/*%]/.test(sign)); //high priority operands
  return idx === -1 ? signs.findIndex((sign) => /[+-]/.test(sign)) : idx; //low priority operands
};

const calculateSimpleExpression = (expression: string, calculator: Calculator) => {
  const signs = expression.split(' ');
  while (signs.length !== 1) {
    const idx = findOperandIndex(signs);
    const command = getCommand(signs[idx], [signs[idx - 1], signs[idx + 1]]);
    if (command) calculator.execute(command);
    signs.splice(idx - 1, 3, calculator.getCurrent());
  }
  return signs[0];
};

const countBrackets = (expression: string) => {
  const { length: left } = expression.match(/[\(]/g) ?? [];
  const { length: right } = expression.match(/[\)]/g) ?? [];
  return [left, right];
};

const removeExcess = (expression: string) => {
  const excessRegex = /([^\)]+)$/;
  const [excess] = expression.match(excessRegex) || [];
  return /[+-/*%]/.test(excess) ? expression : expression.replace(excessRegex, '');
};

export const resolveBrackets = (expression: string) => {
  const [left, right] = countBrackets(expression);
  return `${removeExcess(expression)}${')'.repeat(left - right)}`;
};

export const negateValue = (value: string) =>
  Number(value) > 0 ? `-${value}` : Number(value) === 0 ? value : value.slice(1);

export const addValueToExpression = (value: string, expression: string) => {
  const piece = Number(value) < 0 ? `(${value})` : value;
  return /\)$/.test(expression) ? '' : piece;
};

export const addDotToValue = (value: string) => (/\./.test(value) ? value : `${value}.`);

export const openBracket = (expression: string) => {
  if (/\)$/.test(expression)) return expression.replace(/\(([^\(]+)$/g, '(');
  return `${expression}(`;
};

export const closeBracket = (expression: string, value: string) => {
  const [left, right] = countBrackets(expression);
  if (left <= right) return expression;
  if (/[\( ]/.test(expression.slice(-1))) return `${expression}${value})`;
  return `${expression})`;
};

export const calculateExpression = function calculate(
  expression: string,
  calculator: Calculator
): string {
  if (!/[\(\)]/.test(expression)) {
    return calculateSimpleExpression(expression, calculator);
  }
  const signs = expression.split('');
  let start = null;
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === '(') {
      start = i;
    }
    if (signs[i] === ')' && start !== null) {
      const piece = calculate(signs.slice(start + 1, i).join(''), calculator);
      signs.splice(start, i - start + 1, piece);
      i = -1;
    }
  }
  return calculate(signs.join(''), calculator);
};
