/// <reference types="cypress" />
import Stepper from './Stepper'

describe('Steper.cy.jsx', () => {
  it('playground', () => {
    cy.mount(<Stepper />) // This command now works in any test
  })
})
