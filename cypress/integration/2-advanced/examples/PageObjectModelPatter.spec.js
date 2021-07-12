/**
 
  Page Object Model Patern (POM)

  POM: It is a design method. That is seperated from automation scripts.

  Actuallty POM is consist of Locators + Test Case Script
  
  Adv: 
    -Reausability
    -Maintainabilitiy
    

*/

/// <reference types = "cypress" />

import LoginPage from '../PageObjects/LoginPage';

describe('POM Test Suite', ()=>{

  it('LoginPOMTest',  () => {
    
    const lp = new LoginPage()
    
    lp.visit();
    lp.fillEmail("mercury");
    lp.fillPassWord("mercury");
    lp.submitButton();

    

  })
})
