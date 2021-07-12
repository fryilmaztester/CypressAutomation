
/// <reference types = "cypress" />

class LoginPage {

    visit(){

        
        const url = "http://demo.guru99.com/test/newtours/";
        cy.visit(url);

    }

    fillEmail(userName){
        
        const userNameLocator = "input[name='userName']";
        const field = cy.get(userNameLocator);
        field.clear();
        field.type(userName);
        return this;
    }

    fillPassWord(pw){
        
        const passWordLocator = "input[name='password']";
        const field = cy.get(passWordLocator);
        field.clear();
        field.type(pw);
        return this;
    }

    submitButton(){
        
        const submitButton = "input[value='Submit']";
        const field = cy.get(submitButton);
        field.click();
    }

    
}

export default LoginPage;