describe('Settings', () => {
  beforeEach(() => {
    cy.visit('/settings');
  });

  it('should render settings controls', () => {
    cy.get('select[data-test-id=select-theme]').should('have.value', 'light');
    cy.get('[data-test-id=button-clear-all]').should('have.text', 'Clear All History');
  });

  it('should switch theme', () => {
    cy.get('select[data-test-id=select-theme]').select('dark');
    cy.get('#root').should('have.css', 'background-color', 'rgb(62, 62, 62)');
    cy.get('select[data-test-id=select-theme]').select('light');
    cy.get('#root').should('have.css', 'background-color', 'rgb(245, 245, 245)');
  });

  it('should clear all on click', () => {
    const times = 2;
    cy.visit('/');
    cy.addHistory(times);
    cy.get("[data-test-id='button-8']").click();
    cy.get("[data-test-id='button-+']").click();
    cy.get("[data-test-id='button-5']").click();
    cy.get("[data-test-id='display-expression']").should('have.text', '8 + ');
    cy.get("[data-test-id='display-value']").should('have.text', '5');
    cy.get('[data-test-id=history]').children('ul').children('li').should('have.length', times);
    cy.visit('/settings');
    cy.get('[data-test-id=button-clear-all]').click();
    cy.visit('/');
    cy.get("[data-test-id='display-expression']").should('be.empty');
    cy.get("[data-test-id='display-value']").should('have.text', '0');
    cy.get('[data-test-id=history]').children('ul').children('li').should('not.exist');
  });
});
