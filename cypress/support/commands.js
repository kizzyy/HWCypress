// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('inputDisplay', (number, text, pass) => {
    // cy.get('#username').type(username)
    // cy.get('#password').type(password)
    // cy.get('#submit').click()

    cy.get('#input-number').type(number)
    cy.get('#input-text').type(text)
    cy.get('#input-password').type(pass)

    cy.get('#btn-display-inputs').click()
})

Cypress.Commands.add('checkDisplay', (number, text, pass) => {
    cy.get('#output-number').should('have.text', number)
    cy.get('#output-text').should('have.text', text);
    cy.get('#output-password').should('have.text', pass);
    cy.get('#output-date').not('.required');
})

Cypress.Commands.add('clearInput', () => {
    cy.get('#btn-clear-inputs').click()
    cy.get('#result').not('be.visible')
    cy.get('.page-layout > .container')
        .find('input')
        .each(($input) => {
            cy.wrap($input).should('have.value', '')
        });
})