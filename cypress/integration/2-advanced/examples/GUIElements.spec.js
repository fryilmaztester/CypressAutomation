/*

UI Elements: 
    Input box
    Radio Button

Commands:
    visit()
    url()
    get()
    title()


*/

/*

1) Go to the url
2) Verify that url include "newtours"
3) Assert userName and passWord areas are visible and enable
4) Type userName and passWord
5) Assert submit button is visible
6) Click submit button
7) Click Flights text
8) Title  verify 
9) Verify radio buttons are visibling and check 
10) Click oneWay radiobutton 
11) Verify vivsible and click conitunue button
12) Verify after contiune button click 

Test Data: 
url : http://demo.guru99.com/test/newtours/
userName: mercury
passWord: mercury
expectedTitle= "Find a Flight: Mercury Tours: "
expectedCase => roundTrip ->  chechked
                 oneWay -> unchecked )
expectedClickContinueButton = "After flight finder - No Seats Avaialble "
*/


/// <reference types = "cypress" />

var urlStr = " http://demo.guru99.com/test/newtours/";
var userNameLocator = "[name=userName]";
var userName = "mercury";
var passWordLocator = "[name=password]"
var passWord = "mercury";
var submitButton = "[value=Submit]";
var flightLocate = "a[href='reservation.php']";
var expectedTitle = "Find a Flight: Mercury Tours:";
var oneWayLocate = "input[value='oneway']";
var rountTripLocate = "input[value='roundtrip']";
var continueButton = "input[name='findFlights']";
var expectedClickContinueButtonLocate = "img[src='images/home.gif']";

describe('UI Elements', () => {

    it('Verify InputBox and Radio Button',  () => {
        
        cy.visit(urlStr); // visit URL 
        
        cy.url().should("include","newtours"); //Verify that url include "newtours"

        cy.get(userNameLocator).should("be.visible").should("be.enabled"); //Assert userName and passWord areas are visible and enable

        cy.get(passWordLocator).should("be.visible").should("be.enabled"); // Assert userName and passWord areas are visible and enable
        
        cy.get(userNameLocator).type(userName); // Type userName in the userName box

        cy.get(passWordLocator).type(passWord); // Type passWord in the passWord area

        cy.get(submitButton).should("be.visible"); // Assert submit button is visible

        cy.get(submitButton).click(); // Click submit button

        cy.get(flightLocate).click(); // Click Flights text

        cy.title().should("eq", expectedTitle); //Title  verify (expectedTitle= "Find a Flight: Mercury Tours: ")
        
        cy.get(rountTripLocate).should("be.visible").should("be.checked"); // roundTrip button was checked by default 

        cy.get(oneWayLocate).should("be.visible").should("not.be.checked").click(); 
           
        cy.get(continueButton).should("be.visible"). click(); // visible and click conitunue button

        cy.get(expectedClickContinueButtonLocate).should("be.visible");

            }
        )
    }
)