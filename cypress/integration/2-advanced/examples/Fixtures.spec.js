/// <reference types = "cypress" />

/**
 
  //import example from '../fixtures/example.json'

/*
    before(function () {

    
        
        // "this" points at the test context object
        cy.fixture('example').then((data) => {
          // "this" is still the test context object
          this.data = data
        })
        
      })
      

Load a fixed set of data loacated in a file

Doc: https://docs.cypress.io/api/commands/fixture#Syntax 

 */

// var userNameLocator = "input[name='userName']";
// var passWordLocator = "input[name='password']";
// var submitButton = "input[value='Submit']"; 




// var urlStr = "http://demo.guru99.com/test/newtours/";

describe('FixtureSuite Test' , () => {

  
      
    it('Fixtures Test',  () => {

        cy.fixture('example').then((data) => {
            // "this" is still the test context object
            this.data = data })

        cy.visit("http://demo.guru99.com/test/newtours/"); // Go to the url

        cy.get("input[name='userName']").type(this.data.name); // userName

        cy.get("input[name='password']").type(this.data.pw); // passWord

        cy.get("input[value='Submit']").click(); // submitButton


    })


    })