import {Given,When,And,Then} from "@badeball/cypress-cucumber-preprocessor";

Given('I open the google page', ()=> {
    cy.visit('/')
})

When('I am typing my search request Hello build into Google and enter', ()=> {
    cy.get('.gLFyf').type('Hello Build{enter}')
})

And('I am validate total results and search time', ()=> {
    cy.get('#result-stats')
})
When('I am pressed the first search result', () => {
    cy.contains('Home | HelloBuild transforms your digital products').click()
})

And('validate correct page', ()=> {
    cy.url().should('contains','hellobuild.co')
})
And('I am pressed each of the buttons on the navigation bar and also scroll down', ()=> {
    cy.contains('build').scrollIntoView({ duration: 2000 })
    cy.contains('Solutions').click()
    cy.contains('build').scrollIntoView({ duration: 2000 })
    cy.contains('About').click()
    cy.contains('build').scrollIntoView({ duration: 2000 })
})

When('I press the about us button', ()=> {
    cy.contains('Contact Us').click({ force: true })
})

And('I am fill out the form', ()=> {
    cy.get('#FNAME_id').type('Steven')
    cy.get('#COMPANY_id').type('Hello Build')
    cy.get('#EMAIL_id').type('sarteaga@hellobuild.com')
    cy.get('#REPEMAIL_id').type('sarteaga@hellobuild.com')
    cy.get('#MMERGE4_id').type('Prueba de automatizacion Steven Arteaga, recorrido de pagina y formulario')
    cy.scrollTo(100,0)
    cy.wait(4000)
})

Then('it should search, show the results and time taken, the page can be navigated and the form can be filled', ()=> {
    cy.contains('Home').click()
})



