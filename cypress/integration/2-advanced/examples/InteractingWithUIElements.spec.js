/*

Interacting with UI Elements:
    Chech Boxes
    DropDowns


1) Go to the url
2) You will check all checkbox checked --Positive Validation
3) You will check all checkbox unchecked --Negative Validation
4) You write multi checkbox ( .check() accepts an array of values )



TestData:
url: "http://demo.automationtesting.in/Register.html";
*/

/// <reference types = "cypress" />

var urlStr = "http://demo.automationtesting.in/Register.html";
var cricketCheckBox = "#checkbox1";
var movieCheckBox = "#checkbox2";
var hockeyChechkBox = "#checkbox3";
var multiCheckBox = "input[type=checkbox]";

var cricketStr = "Cricket";
var movieStr = "Movies";
var hockeyStr = "Hockey";

var chechBoxObj = [cricketStr,movieStr,hockeyStr];


var skillsDropDown = "#Skills";

var languageSelect = "#msdd";
var multiLangs = ".ui-corner-all";
var filipinoStr = "Filipino";
var japanesesStr = "Japanese";


var comboBox = "span[role='combobox']";
var textBox = "input[role='textbox']";


describe("Interacting with UI Elements", () =>{

    it('Verify check boxes',  () => {
        
        cy.visit(urlStr); //Go to the url

        // Positive Validation

        cy.get(cricketCheckBox).check().should("be.checked").and("have.value", cricketStr); //You will check all checkbox 
        cy.get(movieCheckBox).check().should("be.checked").and("have.value", movieStr);   //You will check all checkbox
        cy.get(hockeyChechkBox).check().should("be.checked").and("have.value", hockeyStr);//You will check all checkbox
            
        //Negative Validation

        cy.get(cricketCheckBox).uncheck().should("not.be.checked"); // You will check all checkbox unchecked
        cy.get(movieCheckBox).uncheck().should("not.be.checked");  // You will check all checkbox unchecked
        cy.get(hockeyChechkBox).uncheck().should("not.be.checked");// You will check all checkbox unchecked

        //You write multi checkbox ( .check() accepts an array of values )

        cy.get(multiCheckBox).check(chechBoxObj); // We create an array inside check() method.
            
            
            }
        )
        

        it('Skills drop downs',  () => {
        
            cy.get(skillsDropDown).select('C').should("have.value","C");
    
                }
            )

         it('Languages multi select',  () => {
            
            cy.get(languageSelect).click();

            cy.get(multiLangs).contains(filipinoStr).click();

            cy.get(multiLangs).contains(japanesesStr).click();

            }
          )

          it('Country search dropDown',  () => {
            
            cy.get(comboBox).click({force: true} ); // we can use {force: true} because, befores test cover our select country area. So we want to click select country and select a coutnry. So we pass thiss issue this method.

            cy.get(textBox).type("Neth");

            cy.get(textBox).type("{enter}");

            }
          )
        
        
    

    }   
)