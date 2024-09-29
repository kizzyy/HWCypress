import bmiPage from "../../support/bmipage/bmiPage"
const dataTest = require ("../../fixtures/bmiInput.json")

describe('RadioButtons', () => {

    beforeEach(() => {
        cy.visit('https://practice.expandtesting.com/bmi')
    })
    //#bmi-gauge > svg 
    it('tc-01 visible', () => {
        cy.get('.page-title').should('be.visible').and('contain', 'BMI Calculator App for Automation Testing Practice');
        cy.get('.page-layout').find('select').should('have.length', 1)
        cy.get('.page-layout').find('input').should('have.length', 3)

    })

    it('tc-02 genderselect', () => {
        cy.get('.page-layout').find('select').should('have.length', 1)
        cy.get('.page-layout').find('label').contains('Gender');
        // cy.get('input').clear();
        // yields <option value="456">apples</option>
        cy.get('select').select('Male').should('have.value', 'Male')

    })

    it('tc-03 age', () => {
        // cy.get('.page-layout').find('label[for="age"]').should('have.text', 'Age (ages: 2 - 120)')
        // cy.get('input').clear();
        // // yields <option value="456">apples</option>
        // cy.get('#age').type(dataTest.age.valid)
        bmiPage.verifyLabel('age','Age (ages: 2 - 120)')
        cy.get('input').clear();
        bmiPage.typeValue('age',dataTest.age.valid)
    })

    it('tc-04 height', () => {
        // cy.get('.page-layout').find('label[for="height"]').should('have.text', 'Height (cm)')
        // cy.get('input').clear();
        // cy.get('#height').type(dataTest.height.valid)
        bmiPage.verifyLabel('height','Height (cm)')
        cy.get('input').clear();
        bmiPage.typeValue('height',dataTest.height.valid)
    })

    it('tc-05 weight', () => {
        // cy.get('.page-layout').find('label[for="weight"]').should('have.text', 'Weight (kg)')
        // cy.get('#weight').clear();
        // cy.get('#weight').type(dataTest.weight.valid)
        bmiPage.verifyLabel('weight','Weight (kg)')
        cy.get('#weight').clear();
        bmiPage.typeValue('weight',dataTest.weight.valid)
    })

    
    it('tc-06 validCal', () => {
        // cy.get('input').clear();
        cy.get('select').select('Male').should('have.value', 'Male')
        bmiPage.typeValue('age',dataTest.age.valid)
        bmiPage.typeValue('height',dataTest.height.valid)
        bmiPage.typeValue('weight',dataTest.weight.valid)
        cy.get('.btn-primary').click();
        bmiPage.verifyReport()
        bmiPage.verifyInformation('Male',dataTest.age.valid,dataTest.height.valid,dataTest.weight.valid)
        bmiPage.verifyBMI()
    })

    it('tc-07 invalidAgeCal', () => {
        // cy.get('input').clear();
        cy.get('select').select('Male').should('have.value', 'Male')
        bmiPage.typeValue('age',dataTest.age.invalid)
        bmiPage.typeValue('height',dataTest.height.valid)
        bmiPage.typeValue('weight',dataTest.weight.valid)
        cy.get('.btn-primary').click();
        bmiPage.verifyFailBMI()
    })

    it('tc-07 invalidHeightCal', () => {
        // cy.get('input').clear();
        cy.get('select').select('Male').should('have.value', 'Male')
        bmiPage.typeValue('age',dataTest.age.valid)
        bmiPage.typeValue('height',dataTest.height.invalid)
        bmiPage.typeValue('weight',dataTest.weight.valid)
        cy.get('.btn-primary').click();
        bmiPage.verifyFailBMI()
    })

    it('tc-07 invalidWeightCal', () => {
        // cy.get('input').clear();
        cy.get('select').select('Male').should('have.value', 'Male')
        bmiPage.typeValue('age',dataTest.age.valid)
        bmiPage.typeValue('height',dataTest.height.valid)
        bmiPage.typeValue('weight',dataTest.weight.invalid)
        cy.get('.btn-primary').click();
        bmiPage.verifyFailBMI()
    })

    
})