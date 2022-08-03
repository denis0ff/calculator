describe('History', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render history', () => {
    cy.get('[data-test-id=history]').children('h3').should('have.text', 'History');
    cy.get('[data-test-id=clear-history]').should('have.text', 'Clear');
  });

  it('should add history after calculation', () => {
    const times = 5;
    cy.addHistory(times);
    cy.get('[data-test-id=history]').children('ul').children('li').should('have.length', times);
  });

  it('should clean after "clear-button" click', () => {
    const times = 2;
    cy.addHistory(times);
    cy.get('[data-test-id=clear-history]').click();
    cy.get('[data-test-id=history]').children('ul').children('li').should('not.exist');
  });

  it('should toggle history view', () => {
    cy.get('[data-test-id=history-toggler]').click();
    cy.get('[data-test-id=history]').children('ul').should('not.exist');
    cy.get('[data-test-id=clear-history]').should('not.exist');
    cy.get('[data-test-id=history-toggler]').click();
    cy.get('[data-test-id=history]').children('ul');
    cy.get('[data-test-id=clear-history]').should('have.text', 'Clear');
  });
});
