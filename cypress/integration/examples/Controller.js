
const cypress = require("cypress");

import LoginPage from "../../support/Pages/LoginPage";
import HomePage from "../../support/Pages/HomePage";
/// //<reference types="cypress"/>
describe("Controller suite", function()
{
    it("Test case : Login  ", function(){
        cy.visit("https://dev-jatri.jatritech.com/");

        //userPhone number from json file 
        cy.fixture("user").then((usreData)=>{
            const number = usreData.userPhoneNumber;
            const mail = usreData.userMail;
            const password = usreData.userPassword;
            const loginPage = new LoginPage();
            cy.visit("https://dev-jatri.jatritech.com/login");
            loginPage.login(number);
            cy.visit("https://admin.dev-jatri.jatritech.com/login");
            cy.get("#email").type(mail);
            cy.get("#password").type(password);
            cy.contains("button","Login");

        })

        // cy.LoginaPI().then(function(){
        //     cy.visit("https://dev-jatri.jatritech.com", {
        //         onBeforeLoad: function(window){
        //             window.localStorage.setItem("token", Cypress.env("token"));
        //         }
        //     });
            
        // })
        
    })
    // it("Test case : Trip Search ", function(){
    //     cy.visit("https://dev-jatri.jatritech.com/");
    //     const homePage= new HomePage();
    //     homePage.searchFromCity();
    //     homePage.searchToCity();
    //     homePage.selectDate();

        
    // })
    
})