/// <reference types = "cypress" />

/**
 
Load a fixed set of data loacated in a file

Doc: https://docs.cypress.io/api/commands/fixture#Syntax 

 */

// var userNameLocator = "input[name='userName']";
// var passWordLocator = "input[name='password']";
// var submitButton = "input[value='Submit']"; 


var urlStr = "http://demo.guru99.com/test/newtours/";

describe('FixtureSuite Test' , () => {

    
    before(function () {
        // "this" points at the test context object
        cy.fixture('example').then((data) => {
          // "this" is still the test context object
          this.data = data
        })
      })
      

    it('Fixtures Test',  () => {

        cy.visit("http://demo.guru99.com/test/newtours/"); // Go to the url

        cy.get("input[name='userName']").type(this.data.userName); // userName

        cy.get("input[name='password']").type(this.data.passWord); // passWord

        cy.get("input[value='Submit']").click(); // submitButton


    })



})