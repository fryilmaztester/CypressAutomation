/*

Locating Elements: 

get(): that means is getting the element 
selector: Locate the element

Get one or more DOM elements by selector.

cy.get(selector)

CSS Selector: 

.class

#id

[attribute = value]

.class[attribute = value]
*/


/*
1) Launch browser and open url
        https://www.saucedemo.com/

2) Enter Text in userName: standard_user
   Enter Text in passWord: secret_sauce

3) Click Login

4) Assert login

5) Sauce Labs Backpack add to cart

6) Click shooping basket


*/

/// <reference types = "cypress" />

describe ("Locating Elements", function () {
        
        it('Verifies types of locators',  () => {
                
                cy.visit(" https://www.saucedemo.com/"); //open the url ==>> #id
               
                cy.get("#user-name").type("standard_user"); // type userName ==>> #id
               
                cy.get("#password").type("secret_sauce"); // type passWord  ==>> #id
               
                cy.get("#login-button").click() // login button click
               
                cy.get(".title").contains("PRODUCTS"); // assertion for login

                // cy.wait(5000); // Wait 

                cy.get("[data-test=add-to-cart-sauce-labs-backpack]").click(); // First add to cart clickc ==> [attribue=value]
               
                // cy.wait(3000); // Wait 

                cy.get(".shopping_cart_link").click(); // Click shopping basket

                cy.get(".cart_quantity").contains(1); // Assertion for product


        }
           )
    }
)

