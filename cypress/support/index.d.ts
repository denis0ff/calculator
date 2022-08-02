/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    calculateTwoDigits: (sign: string, answer: string, negative: boolean) => Chainable<void>;
    calculateFractionalDigits: (sign: string, answer: string) => Chainable<void>;
    calculateDifficultExpression: () => Chainable<void>;
    addHistory: (times: number) => Chainable<void>;
    getInfinityResult: () => Chainable<void>;
    getNanResult: () => Chainable<void>;
  }
}
