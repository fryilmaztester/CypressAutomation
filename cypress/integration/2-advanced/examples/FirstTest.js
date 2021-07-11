
/// <reference types = "cypress" />

describe('MyTestSuite', () => {
    
    it('Verify Title Of the Page- Positive', () => {
      
    cy.visit("https://www.nopcommerce.com/en");
    cy.title().should("eq","Free and open-source eCommerce platform. ASP.NET based shopping cart. - nopCommerce");
    
    })

    it('Verify Title Of the Page-Negative', () => {
      
      cy.visit("https://www.nopcommerce.com/en");
      cy.title().should("eq","Free and open-source eCommerce platform. ASP.NET based shopping cart.");
      
      })

  })