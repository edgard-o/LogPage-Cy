describe('Verify Browser Stack Home Page', () => {
    before(() => {
        Cypress.config('defaultCommandTimeout', 4000)

    })

    beforeEach(() => {
        cy.visit('https://practicetestautomation.com/practice-test-login/');
    })


    it('Verify logo is visible', () => {
        cy.get('#site-title > a > img').should('be.visible');
    })

    it('Verify Header is present', () => {
        cy.get('h2').first().should('be.exist');
    })

    it('Verify Product menu are present', () => {

        cy.get('#username').should('be.exist')
            .click()
            .clear()
            .type('student');

        cy.get('#password').should('be.exist')
            .click()
            .clear()
            .type('Password123');

        cy.get('#submit').should('be.exist')
            .click();

        cy.url().should('contain', 'practicetestautomation.com/logged-in-successfully/');
        cy.get("h1").first()
            .should('be.exist')
            .should('have.text', 'Logged In Successfully');
    })

})