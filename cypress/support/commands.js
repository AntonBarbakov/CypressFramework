import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'

addMatchImageSnapshotCommand({
  failureThreshold: 0.03, // threshold for entire image
  failureThresholdType: 'percent', // percent of image or number of pixels
  customDiffConfig: { threshold: 0.1 }, // threshold for each pixel
  capture: 'viewport', // capture viewport in screenshot
})

Cypress.Commands.add('setResolution', size => {
  if (Cypress._.isArray(size)) {
    cy.viewport(size[0], size[1])
  } else {
    cy.viewport(size)
  }
})

Cypress.Commands.add('login', (username, password) => {
	cy.get('#user_login').type(username)
	cy.get('#user_password').type(password)
	cy.get('#user_remember_me').click()
	cy.contains('Sign in').click()
})

Cypress.Commands.add('isVisible', (selector)=>{
  cy.get(selector).should('be.visible')
})

Cypress.Commands.add('isHidden', (selector)=>{
  cy.get(selector).should('not.exist')
})

Cypress.Commands.add('setRessolution', (size)=>{
  if(Cypress._.isArray(size)){
    cy.viewport(size[0], size[1])
  } else {
    cy.viewport(size)
  }
})

