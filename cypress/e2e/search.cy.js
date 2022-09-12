const { get } = require("lodash")

describe('search in browser and explore Hello Build', () => {
  it('open browser', () => {
    cy.visit('/')
  })

  it('search input', () => {
    cy.get('.gLFyf').type('Hello Build{enter}')
  })

  it('result and search time', () => {
    cy.get('#result-stats')
  })

  it('open page hello build', () => {
    cy.contains('Home | HelloBuild transforms your digital products').click()
  })

  it('search verify', () => {
    cy.url().should('contains','hellobuild.co')
  })

  it('navigation page', () => {
    cy.contains('build').scrollIntoView({ duration: 2000 })
    cy.contains('Solutions').click()
    cy.contains('build').scrollIntoView({ duration: 2000 })
    cy.contains('About').click()
    cy.contains('build').scrollIntoView({ duration: 2000 })
    cy.contains('Contact Us').click({ force: true })
  })
  it('complete the application form', () => {
    cy.get('#FNAME_id').type('Steven')
    cy.get('#COMPANY_id').type('Hello Build')
    cy.get('#EMAIL_id').type('sarteaga@hellobuild.com')
    cy.get('#REPEMAIL_id').type('sarteaga@hellobuild.com')
    cy.get('#MMERGE4_id').type('Prueba de automatizacion Steven Arteaga, recorrido de pagina y formulario')
    cy.scrollTo(100,0)
    cy.wait(4000)
    cy.contains('Home').click()
  })

})