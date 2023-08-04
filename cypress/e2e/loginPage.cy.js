import locators from "../Pages/loginPage.cy";

describe('Verify Browser Stack Home Page', () => {
    before(() => {
        Cypress.config('defaultCommandTimeout', 4000)

    })

    beforeEach(() => {
        cy.visit(Cypress.env("baseUrl") + '/practice-test-login/');
    })


    it('Verify logo is visible, h2 exist and login functionality', () => {
        cy.get(locators.logo).should('be.visible');

        cy.get('h2').first().should('be.exist');

        cy.get(locators.username).should('be.exist')
            .click()
            .clear()
            .type(Cypress.env('username'));

        cy.get(locators.password).should('be.exist')
            .click()
            .clear()
            .type(Cypress.env('password'), { log: false });

        cy.get(locators.submitButton).should('be.exist')
            .click();

        cy.url().should('contain', Cypress.env("baseUrl") + '/logged-in-successfully/');

        cy.get("h1").first()
            .should('be.exist')
            .should('have.text', 'Logged In Successfully');
    })
})