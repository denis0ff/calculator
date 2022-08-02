describe('Keypad', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render keypad buttons', () => {
    const buttons = [
      'C',
      '7',
      '8',
      '9',
      '*',
      '-',
      '4',
      '5',
      '6',
      '/',
      '+',
      '1',
      '2',
      '3',
      '=',
      '.',
      '(',
      '0',
      ')',
      'CE',
      '%',
      '+/-',
    ];
    buttons.forEach((sign) => cy.get(`[data-test-id='button-${sign}']`).should('have.text', sign));
  });
});
