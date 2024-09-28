const data = require("../../fixtures/inputs.json")


describe('Webinput', () => {

    beforeEach(() => {
        // cy.fixture('login').as('loginData')
        cy.visit('https://practice.expandtesting.com/inputs')
    })

    it('tc-01 input', () => { //can named anything
        // cy.get('h1').should('have.text','Web inputs page for Automation Testing Practice');
        // cy.get('#input-number').type(data.number)
        // cy.get('#input-text').type(data.text)
        // cy.get('#input-password').type(data.password)

        cy.get('#input-password').should('have.attr', 'type', 'password')
        cy.inputDisplay(data.number,data.text,data.password);
        // cy.get('#input-date').click()
        // cy.get('#input-date').focus()
        // cy.get('#input-date').click({ force: true })
        // cy.get('.calendar-day').contains('25').click() // Replace '.calendar-day' with the actual class of the date element
        // cy.get('#input-date').invoke('val', data.date).trigger('change')
        // cy.get('.calendar-icon').click() // Replace `.calendar-icon` with the actual selector for the icon
        // cy.get('#input-date').click('right')
        // cy.get('#input-date').click(279, 24)
        // cy.get('#input-date').click(275, 22)
        // cy.get('stackadapt_usd').focus()
        // cy.get('#input-date').should('have.value', '09-25-2024')

        // cy.get('#input-date').invoke('val', data.date).trigger('change')
        // cy.get('#input-date').should('have.value', data.date)
        cy.get('#result').should('be.visible')
        cy.checkDisplay(data.number,data.text,data.password);

        // cy.get('#col-md-4').find('input')

    })

    it('tc-02 clear', () => {
        cy.inputDisplay(data.number,data.text,data.password);
        cy.clearInput();
        
    })

})