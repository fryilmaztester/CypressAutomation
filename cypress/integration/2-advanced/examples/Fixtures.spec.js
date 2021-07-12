/// <reference types = "cypress" />

/**
 
Load a fixed set of data loacated in a file

Doc: https://docs.cypress.io/api/commands/fixture#Syntax 

 */

var userNameLocator = "input[name='userName']";
var passWordLocator = "input[name='password']";
var submitButton = "input[value='Submit']";


var urlStr = "http://demo.guru99.com/test/newtours/";

describe('FixtureSuite Test' , () => {

    
    before(function () {
        // "this" points at the test context object
        cy.fixture('user').then((user) => {
          // "this" is still the test context object
          this.user = user
        })
      })
      

    it('Fixtures Test',  () => {

        cy.visit(urlStr); // Go to the url

        cy.get(userNameLocator).type(this.user.userName); // userName

        cy.get(passWordLocator).type(this.user.passWord); // passWord

        cy.get(submitButton).click(); // submitButton


    })



})