import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LandingPage from "../../framework/pageobjects/landingpage";
import LoginPage from "../../framework/pageobjects/loginpage";
import HomePage from "../../framework/pageobjects/homepage";
import CommonActions from "../../framework/commonactions/commonactions"

// Given I launch application
// Then I should be in the landing page
// When I login to the application
// Then I should see the home page
// When I take a screenshot
// When I log out of the application
// Then I should be in the landing page
// When I take a screenshot

Given(/^I launch application$/, () => {
  LandingPage.visit();
});

Then(/^I should be in the landing page$/, () => {
  LandingPage.verifyUserIsInLandingPage();
});

When(/^I login to the application$/, () => {  
    LandingPage.pressLogin();
  LoginPage.enterUsername();
  LoginPage.enterPassword();
  LoginPage.pressLogin();  
});

Then(/^I should see the home page$/, () => {
    HomePage.verifyUserIsInHomePage();
});

When(/^I take a screenshot$/, () => {
    CommonActions.grabScreenShot();
});


Then(/^I log out of the application$/, () => {
    HomePage.pressLogout();
});
