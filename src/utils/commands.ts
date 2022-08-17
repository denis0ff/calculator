export class Command {
  execute: () => number;
  constructor(execute: () => number) {
    this.execute = execute;
  }
}
export class AddCommand {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  execute() {
    return this.x + this.y;
  }
}

export class SubCommand {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  execute() {
    return this.x - this.y;
  }
}

export class MulCommand {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  execute() {
    return this.x * this.y;
  }
}

export class DivCommand {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  execute() {
    return this.x / this.y;
  }
}

export class ResDivCommand {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  execute() {
    return this.x % this.y;
  }
}

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
