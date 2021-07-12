/// <reference types = "cypress" />


/*

1) Chechk Value presence anywhere in the table
2) Specisific row and cloumn (ex: row: 2, cloumn: 3 == > Selenium)
3) Check value presence based on condition by iterating rows.
        - Check the book name "Master In JS" whose author is 'Amit'.


tr: Row
td: Column
*/

var urlStr = "http://testautomationpractice.blogspot.com/";
var bookTableLocater = "table[name='BookTable']";
var secondRowThirdCloumnLocate = "table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)";

var seleniumStr = "Learn Selenium";
var expectedSecondRowThirdCloumnStr = "Selenium";

// var allAuthourTable = ["table[name=BookTable]>tbody>tr td:nth-child(2)"];
var allBookName = "table[name=BookTable]>tbody>tr td:nth-child(1)";

describe('Table Test Suite', () => {

    it('Table Test',  () => {
        
        cy.visit(urlStr); // Go to the url

        cy.get(bookTableLocater).contains("td",seleniumStr).should("be.visible"); // 1) Chechk Value presence anywhere in the table

        cy.get(secondRowThirdCloumnLocate).contains(expectedSecondRowThirdCloumnStr).should("be.visible"); // Specisific row and cloumn (ex: row: 2, cloumn: 3 == > Selenium)

        /*
        3) Check value presence based on condition by iterating rows.
        - Check the book name "Master In JS" whose author is 'Amit'.
        */

        cy.get("table[name=BookTable]>tbody>tr td:nth-child(2)").each(($e, index, _$list) => {

            const textAutor = $e.text();

            if (textAutor.includes("Animesh")) {
                
                cy.get(allBookName).eq(index).then(function (bName) {
                    const bookName = bName.text();
                    expect(bookName).to.equal("Learn JS");
                })
            }
        })

        }
    )


    }
)