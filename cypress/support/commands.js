// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })







// var userNameLocator = "input[name='userName']";
// var passWordLocator = "input[name='password']";
// var submitButton = "input[value='Submit']";


// var urlStr = "http://demo.guru99.com/test/newtours/";


Cypress.Commands.add('login',(userName,passWord) => {

        cy.visit("http://demo.guru99.com/test/newtours/");

        cy.get("input[name='userName']").type(userName);


        cy.get("input[name='password']").type(passWord);

        cy.get("input[value='Submit']").click();

    }
)
