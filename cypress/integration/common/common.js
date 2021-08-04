import { defineStep } from "cypress-cucumber-preprocessor/steps";

/*EXAMPLE HOW WE CAN DEFINE NEW STEPS FOR BDD*/

defineStep('I wait {int} milliseconds' , (time) => {
    cy.wait(time)
})