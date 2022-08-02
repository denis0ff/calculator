describe('Display', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render display', () => {
    cy.get("[data-test-id='display-expression']").should('be.empty');
    cy.get("[data-test-id='display-value']").should('have.text', '0');
  });

  it('should render new values with operand', () => {
    cy.get("[data-test-id='button-8']").click();
    cy.get("[data-test-id='display-value']").should('have.text', '8');
    cy.get("[data-test-id='button-+']").click();
    cy.get("[data-test-id='display-expression']").should('have.text', '8 + ');
    cy.get("[data-test-id='display-value']").should('have.text', '0');
  });

  it('should render new negative values wrapped with brackets', () => {
    cy.get("[data-test-id='button-8']").click();
    cy.get("[data-test-id='button-+/-']").click();
    cy.get("[data-test-id='display-value']").should('have.text', '-8');
    cy.get("[data-test-id='button-+']").click();
    cy.get("[data-test-id='display-expression']").should('have.text', '(-8) + ');
  });

  it('should render brackets', () => {
    cy.get("[data-test-id='button-(']").click().click();
    cy.get("[data-test-id='display-expression']").should('have.text', '((');
    cy.get("[data-test-id='button-9']").click();
    cy.get("[data-test-id='button-)']").click();
    cy.get("[data-test-id='display-expression']").should('have.text', '((9)');
  });

  it('should correct closed brackets', () => {
    cy.get("[data-test-id='button-(']").click().click();
    cy.get("[data-test-id='button-9']").click();
    cy.get("[data-test-id='button-)']").click().click().click().click();
    cy.get("[data-test-id='display-expression']").should('have.text', '((9))');
  });

  it('should clean valid bracket group with "(" click', () => {
    cy.get("[data-test-id='button-(']").click();
    cy.get("[data-test-id='button-9']").click();
    cy.get("[data-test-id='button-+']").click();
    cy.get("[data-test-id='button-9']").click();
    cy.get("[data-test-id='button-)']").click();
    cy.get("[data-test-id='display-expression']").should('have.text', '(9 + 9)');
    cy.get("[data-test-id='button-(']").click();
    cy.get("[data-test-id='display-expression']").should('have.text', '(');
  });

  it('should clean value with "C" action', () => {
    cy.get("[data-test-id='button-5']").click();
    cy.get("[data-test-id='display-value']").should('have.text', '5');
    cy.get("[data-test-id='button-C']").click();
    cy.get("[data-test-id='display-value']").should('have.text', '0');
  });

  it('should clean value and expression with "CE" action', () => {
    cy.get("[data-test-id='button-+']").click();
    cy.get("[data-test-id='button-5']").click();
    cy.get("[data-test-id='display-value']").should('have.text', '5');
    cy.get("[data-test-id='display-expression']").should('have.text', '0 + ');
    cy.get("[data-test-id='button-CE']").click();
    cy.get("[data-test-id='display-value']").should('have.text', '0');
    cy.get("[data-test-id='display-expression']").should('be.empty');
  });

  it('should show error on infinity result', () => {
    cy.getInfinityResult();
    cy.get("[data-test-id='display-value']").should('have.text', 'Error. Memory overflow');
  });

  it('should show error on NaN result', () => {
    cy.getNanResult();
    cy.get("[data-test-id='display-value']").should(
      'have.text',
      'Error. Result cannot be determined'
    );
  });

  it('should reset errors on some button', () => {
    cy.getNanResult();
    cy.get("[data-test-id='button-5']").click();
    cy.get("[data-test-id='display-value']").should('have.text', '5');
    cy.get("[data-test-id='display-expression']").should('be.empty');
    cy.getInfinityResult();
    cy.get("[data-test-id='button-*']").click();
    cy.get("[data-test-id='display-value']").should('have.text', '0');
    cy.get("[data-test-id='display-expression']").should('be.empty');
  });
});
