class bmiPage {

    verifyLabel(label, text) {
        cy.get('.page-layout')
            .find(`label[for="${label}"]`)
            .should('have.text', text)
    }

    typeValue(inputId, value) {
        cy.get(`#${inputId}`).clear()
        cy.get(`#${inputId}`).type(value)
    }


    get report() {
        return cy.get('h2')
    }

    get reportAlert(){
        return cy.get('.alert-box')    
    }

    get reportInfo() {
        return cy.get('b')
    }

    get reportBMI() {
        // return cy.get('#BMI')
        return cy.contains(/Your BMI is \d+(\.\d+)? kg\/m2 \(\w+\)/)

    }
    //Action
    verifyReport() {
        this.report.should('have.text', 'Report')
    }

    verifyInformation(gender, age, height, weight) {
        this.reportInfo.should('have.text',gender + ', ' + age + ' (yr), ' + height + ' (cm), ' + weight + ' (kg)')
    }

    verifyBMI() {
        // this.reportBMI.should('contain', /Your BMI is \d+(\.\d+)? kg\/m2 \(\w+\)/)
        this.reportBMI.should('be.visible')
    }

    verifyFailBMI(){
        this.reportAlert.should('have.text','Please provide all the necessary information!×')
    }



}
export default new bmiPage();