describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render navigation bar', () => {
    cy.get('a').should('have.length', 3);
    cy.get('a.active').should('have.text', 'Home(CC)');
  });

  it('should work navigation', () => {
    cy.get('a').contains('Home(FC)').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/home-fc');
    });
    cy.get('a').contains('Settings').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/settings');
    });
  });

  it('should navigate to default page', () => {
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/home-cc');
    });
  });
});
