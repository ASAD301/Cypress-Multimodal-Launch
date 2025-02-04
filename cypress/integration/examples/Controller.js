
//const cypress = require("cypress");

import LoginPage from "../../support/Pages/LoginPage";
/// <reference types="cypress"/>
describe("Controller suite", function()
{
    it("Test case ", function(){
        cy.visit("https://dev-jatri.jatritech.com/");

        //userPhone number from json file 
        cy.fixture("user").then((usreData)=>{
            const number = usreData.userPhoneNumber;
            const loginPage = new LoginPage();
            cy.visit("https://dev-jatri.jatritech.com/login");
            loginPage.login(number);
        })

        cy.LoginaPI().then(function(){
            cy.visit("https://dev-jatri.jatritech.com", {
                onBeforeLoad: function(window){
                    window.localStorage.setItem("token", Cypress.env("token"));
                }
            });
            
        })
        
    })
    
})