describe('Calculations', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should calculate the expression with two simple numbers', () => {
    cy.calculateTwoDigits('+', '12', false);
    cy.calculateTwoDigits('-', '6', false);
    cy.calculateTwoDigits('*', '27', false);
    cy.calculateTwoDigits('/', '3', false);
    cy.calculateTwoDigits('%', '0', false);
  });

  it('should calculate the expression with two negative numbers', () => {
    cy.calculateTwoDigits('+', '-12', true);
    cy.calculateTwoDigits('-', '-6', true);
    cy.calculateTwoDigits('*', '27', true);
    cy.calculateTwoDigits('/', '3', true);
    cy.calculateTwoDigits('%', '0', true);
  });

  it('should calculate the expression with two fractional numbers', () => {
    cy.calculateFractionalDigits('+', '13.332');
    cy.calculateFractionalDigits('-', '6.666');
    cy.calculateFractionalDigits('*', '33.327');
    cy.calculateFractionalDigits('/', '3');
    cy.calculateFractionalDigits('%', '0');
  });

  it('should calculate difficult expression with closed brackets', () => {
    cy.calculateDifficultExpression();
    cy.get("[data-test-id='display-value']").should('have.text', '710.115');
  });

  it('should calculate expression with opened brackets', () => {
    cy.get("[data-test-id='button-4']").click();
    cy.get("[data-test-id='button-+/-']").click();
    cy.get("[data-test-id='button-.']").click();
    cy.get("[data-test-id='button-1']").click();
    cy.get("[data-test-id='button-2']").click();
    cy.get("[data-test-id='button-5']").click();
    cy.get("[data-test-id='button-+']").click();
    cy.get("[data-test-id='button-(']").click();
    cy.get("[data-test-id='button-(']").click();
    cy.get("[data-test-id='button-3']").click();
    cy.get("[data-test-id='button-+/-']").click();
    cy.get("[data-test-id='button-+']").click();
    cy.get("[data-test-id='button-1']").click().click();
    cy.get("[data-test-id='button-*']").click();
    cy.get("[data-test-id='button-3']").click();
    cy.get("[data-test-id='button-.']").click();
    cy.get("[data-test-id='button-7']").click();
    cy.get("[data-test-id='button-2']").click();
    cy.get("[data-test-id='button-*']").click();
    cy.get("[data-test-id='button-2']").click();
    cy.get("[data-test-id='button-4']").click();
    cy.get("[data-test-id='button-=']").click();
    cy.get("[data-test-id='display-value']").should('have.text', '974.955');
  });

  it('should plus result with single value and empty expression', () => {
    cy.get("[data-test-id='button-4']").click();
    cy.get("[data-test-id='button-=']").click();
    cy.get("[data-test-id='display-value']").should('have.text', '8');
    cy.get("[data-test-id='button-=']").click();
    cy.get("[data-test-id='display-value']").should('have.text', '16');
    cy.get("[data-test-id='button-=']").click();
    cy.get("[data-test-id='display-value']").should('have.text', '32');
  });

  it('should add dot number without 0 after calculation', () => {
    cy.get("[data-test-id='button-=']").click();
    cy.get("[data-test-id='display-value']").should('have.text', '0');
    cy.get("[data-test-id='button-.']").click();
    cy.get("[data-test-id='button-5']").click();
    cy.get("[data-test-id='display-value']").should('have.text', '.5');
    cy.get("[data-test-id='button-=']").click();
    cy.get("[data-test-id='display-value']").should('have.text', '1');
  });
});
