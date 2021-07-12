/// <reference types = "cypress" />

var userNameLocator = "input[name='userName']";
var passWordLocator = "input[name='password']";
var submitButton = "input[value='Submit']";


var urlStr = "http://demo.guru99.com/test/newtours/";


describe ("CustomSuite", function () {
        
    it('Custom Test',  () => {
          
        cy.login("mercury","mercury");
        cy.title().should("be.equal","Login: Mercury Tours");
       
        cy.login("mercury","mercury12");
        cy.title().should("not.be.equal","Login: Mercury Tours");

        cy.login("mercury","mercury1212");
        cy.title().should("not.be.equal","Login: Mercury Tours");

        cy.log("This is login block");
            }
       )
    }
)