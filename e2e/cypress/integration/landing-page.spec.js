describe('SLanding Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    describe('Loads Pages', () => {
        it('loads page ', () => {
            cy.get('[data-testid="dept-landing-page"]').should('exist').and('be.visible');
        });
    });

    describe('Page Functionality', () => {
        it('opens and closes menu', () => {
            cy.scrollTo('top');
            cy.get('[data-testid="open-menu"]').should('exist');
            cy.get('[data-testid="open-menu"]').click({ force: true });
            cy.get('[data-testid="close-menu"]').should('exist').and('be.visible');
            cy.get('[data-testid="menu-list"]').should('exist').and('be.visible');
            cy.get('[data-testid="location-menu"]').should('exist').and('be.visible');
        });

        it('should remove logo and header line on scroll', () => {
            cy.scrollTo(0, 500);
            cy.get('[data-testid="header-logo"]').should('not.exist');
            cy.get('[data-testid="header-hr"]').should('not.exist');
        });

        it('should navigate to top', () => {
            cy.get('[data-testid="top-anchor"]').click();
            cy.get('[data-testid="header-logo"]').should('not.exist');
            cy.get('[data-testid="header-hr"]').should('not.exist');
        })
    });

    describe('form validation', () => {
        it('should print form error', () => {
            cy.get('[data-testid="submit"]').click();
            cy.get('[data-testid="error-email"]').contains('Email is Required');
            cy.get('[data-testid="error-full-name"]').contains('Name is Required');
            cy.get('[data-testid="error-message"]').contains('Message is Required');
        });
    });

    describe('Mobile View', () => {
        beforeEach(() => {
            cy.viewport('iphone-x')
        });

        it('should check display', () => {
            cy.get('[data-testid="header-hr"]').should('exist').and('not.be.visible');
            cy.get('[data-testid="top-anchor"]').should('exist').and('not.be.visible');
        })
    });
});
