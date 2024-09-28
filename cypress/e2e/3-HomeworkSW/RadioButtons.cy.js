
describe('RadioButtons', () => {

    beforeEach(() => {
        // cy.fixture('login').as('loginData')
        cy.visit('https://practice.expandtesting.com/radio-buttons')
    })


    it('tc-01 visible', () => {
        cy.get('.page-layout > .container').find('h1').should('have.text','Radio Buttons page for Automation Testing Practice');
        cy.get('.page-layout > .container').find('.card > .card-header').should('be.visible').its(0).should('have.text', 'Select your favorite color:')
        // cy.get('.page-layout > .container').find('.card > .card-body').its(0).focused();
        
        
    })

    it.only('tc-02 checkradio', () => {
        cy.get('[type="radio"]').check('black')
        // cy.get('col-md-3 mb-2').should('be.checked').and('have.value', 'black')
        cy.get('#black').should('be.checked').and('have.value', 'black')
    })

})