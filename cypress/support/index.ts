// in cypress/support/index.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {

  }
}

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

