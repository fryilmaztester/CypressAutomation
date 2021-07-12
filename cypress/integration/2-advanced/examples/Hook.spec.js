/// <reference types = "cypress" />

/*

Cypress hooks borrwed from Mocha used to organizing tests.

before() --> Testten önce bir kere
beforeEach() --> Her testten önce

after() ---> Testten sonra bir kere
afterEach() --> Her testten sonra


*/

describe ("HooksTest Suite", function () {
        
    before(() => {
        // runs once before all tests in the block
        cy.log("*** This is setup block***")


      })
    
      beforeEach(() => {
        // runs before each test in the block (Her it den önce çalışır)
        cy.log("*** This is Login block***")

      })
    
      afterEach(() => {
        // runs after each test in the block
        cy.log("*** This is LogOut block***")
      })
    
      after(() => {
        // runs once after all tests in the block

        cy.log("*** This is TearDown Block*** ")
      })


    it('Searching',  () => {
            
      cy.log("*** This is Searching Test ***"); // like sout. Write console

            }
        )

     it('Advanced Searching',  () => {
            
       cy.log("*** This is Advanced Test ***"); // like sout. Write console
                
            }
          )

      it('Listing Products Test',  () => {
            
        cy.log("*** This is Listing Products Test ***"); // like sout. Write console
            
            }
          )

    }
)
