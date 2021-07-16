/// <reference types = "cypress" />

describe('Login Suite', () => {

    it('Login Test',  () => {
        
        cy.log(this.test.parent.title);
        cy.log(this.test.title);

        cy.visit("https://react-redux.realworld.io/#/login?_k=x43rga");

        cy.get("input[placeholder='Email']").type("framazanyilmaz@gmila.com");
        cy.get("input[placeholder='Password']").type("Aa123456789");
        cy.get("button[type='submit']").click();

        cy.contains("No articles are here... yet.").should("be.visible");
    })
})