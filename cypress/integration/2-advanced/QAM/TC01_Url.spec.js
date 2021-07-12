/// <reference types = "cypress" />

/**
  1) Go to the url :https://react-redux.realworld.io/#/?_k=r5ewky
  2) Verify Title
  3) Verify https protocol
  4) Click sign in
  5) Fill in the blank (name, pw)
  6) Verify sign in text
  7) Click submit button
  8) Verify "Your Feed"
  9) Click new post
  10) Verify url with hash()
  11) Click article title
  12) Fill in the blank for article 
  13) Click publish button
  14) Verify include url 


  expectedTitle = "Conduit";
  expectedHttpsProtocol = "htpps:";
 */


describe('UrlSpec Test Suite', () =>{

    var userNameLocator = "input[placeholder='Email']";
    var passWordLocator = "input[placeholder='Password']";
    var signInLocator = "body > div:nth-child(2) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)";
    var signInButton  = "button[type='submit']";
    var newPostLocator = "a[href='#editor']";
    var articleTitle = "input[placeholder='Article Title']";
    var articleSubject = 'input[placeholder="What\'s this article about?"]';
    var articleText = "textarea[placeholder='Write your article (in markdown)']";
    var publishButton = "button[type='button']";
    var cypressTest  ="li:nth-child(4) a:nth-child(1)";
    var heartLike = ".ion-heart";

    it('Sign in',  () => {
        const url = "https://react-redux.realworld.io/#/login?_k=8dquad";
        const expectedTitle = "Conduit";
        const expectedHttpsProtocol = "https:";
        const userName = "framazanyilmaz@gmila.com";
        const passWord = "Aa123456789";
        const expectedSignIn = "Sign in";
        
        cy.visit(url); 

        cy.title().should("eq",expectedTitle);

        cy.log("PROTOCOL" + cy.location("protocol"));

        cy.location("protocol").should("eq",expectedHttpsProtocol);

       // cy.get(signInLocator).click();

        cy.get(userNameLocator).type(userName);

        cy.get(passWordLocator).type(passWord);

        cy.get(signInButton).contains(expectedSignIn).should("be.visible");
        cy.get(signInButton).click();

        cy.contains("Your Feed", {timeout: 3000}).should("be.visible");

       

    })

    it('Create a post',  () => {
        
        cy.get(newPostLocator).click();

        cy.hash().should("include","#/editor");
       // cy.location("hash").should("include","#/editor");

        cy.get(articleTitle).type("qwert");

        cy.get(articleSubject).type("test");

        cy.get(articleText).type("TESTTT");

        cy.get(publishButton).click();

        cy.url().should("include","article");


    })

    it('Mark and unmarked as favourite',  () => {
        
        cy.get(cypressTest).click();

        cy.contains("My Articles").should("be.visible");

        cy.get(heartLike).click();

        cy.contains("Favorited Articles").should("be.visible").click();

        cy.url().should("include","favorites");

        cy.get(heartLike).click();

        cy.reload();
        
        cy.contains("No articles are here... yet.").should("be.visible");



    })
})