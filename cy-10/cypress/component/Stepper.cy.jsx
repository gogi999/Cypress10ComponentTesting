/// <reference types="cypress" />

import Stepper from './Stepper'

describe('<Stepper />', () => {
  // Set up some constants for the selectors
  const stepperSelector = "[data-testid=stepper]";
  const incrementSelector = "[aria-label=increment]";
  const decrementSelector = "[aria-label=decrement]";

  it("Stepper should default to 0", () => {
    // Arrange
    cy.mount(<Stepper />);
    // Assert
    cy.get(stepperSelector).should("contain.text", 0);
  });

  it('Supports an "initial" prop to set the value', () => {
    // Arrange
    cy.mount(<Stepper initial={100} />);
    // Assert
    cy.get(stepperSelector).should("contain.text", 100);
  });

  it("Can be incremented", () => {
    // Arrange
    cy.mount(<Stepper />);
    // Act
    cy.get(incrementSelector).click()
    // Assert
    cy.get(stepperSelector).should("contain.text", 1);
  });

  it("Can be decremented", () => {
    // Arrange
    cy.mount(<Stepper />);
    // Act
    cy.get(decrementSelector).click()
    // Assert
    cy.get(stepperSelector).should("contain.text", -1)
  });

  it("Has an initial counter that can be incremented and decremented", () => {
    cy.mount(<Stepper initial={100} />);
    cy.get(stepperSelector).should("contain.text", 100)
    cy.get(incrementSelector).click()
    cy.get(stepperSelector).should("contain.text", 101)
    cy.get(decrementSelector).click().click()
    cy.get(stepperSelector).should("contain.text", 99)
  });
})
