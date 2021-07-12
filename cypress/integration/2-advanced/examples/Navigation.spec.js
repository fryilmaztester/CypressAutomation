/// <reference types = "cypress" />

/*

To go back or forward in the browser's history, use the cy.go() command.

cy.go("back"); // back
cy.go(-1); // back


cy.go("forward"); // forward
cy.go(1); // forward


To reload the page, use the cy.reload() command.

*/

var urlStr = "http://demo.automationtesting.in/Register.html";
var urlTitle = "Register";
var webTablePageLocate = "a[href='WebTable.html']";
var webTablePageTitle = "Web Table";



describe ('Navigate', () => {

    it('description',  () => {
        
        cy.visit(urlStr);

        cy.title().should("eq",urlTitle); // Register

        cy.get(webTablePageLocate).contains("Web").click();

        cy.title().should("eq",webTablePageTitle); // webTable

        cy.go("back"); // back

        cy.title().should("eq",urlTitle); // Register 

        cy.go("forward"); // forward

        cy.title().should("eq",webTablePageTitle); // webTable

        cy.go(-1); // back

        cy.title().should("eq",urlTitle); // Register 

        cy.go(1); // forward

        cy.title().should("eq",webTablePageTitle); // webTable


        cy.reload();

       
        cy.reload(true);  // reload the page without using the cache


        }
    )

    }
)