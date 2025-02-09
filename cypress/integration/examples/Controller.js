
//const cypress = require("cypress");

import LoginPage from "../../support/Pages/LoginPage";
import HomePage from "../../support/Pages/HomePage";
import TicketPurchase from "../../support/Pages/TicketSearch";
/// //<reference types="cypress"/>
describe("Controller suite", function()
{
    it("Test case : Login  ", function(){
        cy.visit("https://dev-jatri.jatritech.com/");

        //userPhone number from json file 
        cy.fixture("user").then((usreData)=>{
            // const number = usreData.userPhoneNumber;
            // // const mail = usreData.userMail;
            // // const password = usreData.userPassword;
            // const loginPage = new LoginPage();
            // cy.visit("https://dev-jatri.jatritech.com/login");
            // loginPage.login(number);
            // // cy.visit("https://admin.dev-jatri.jatritech.com/login");
            // // cy.get("#email").type(mail);
            // // cy.get("#password").type(password);
            // cy.contains("button","Login");

        })

        // cy.LoginaPI().then(function(){
        //     cy.visit("https://dev-jatri.jatritech.com", {
        //         onBeforeLoad: function(window){
        //             window.localStorage.setItem("token", Cypress.env("token"));
        //         }
        //     });
            
        // })
        
    })
    it("Test case : Trip Search ", function(){
        cy.visit("https://dev-jatri.jatritech.com/");
        const homePage= new HomePage();
        homePage.searchFromCity();
        homePage.searchToCity();
        homePage.selectDate(); 
        homePage.serchtrip();
    })

    it("Test case : Ticket Purchase", function(){
        cy.visit("https://dev-jatri.jatritech.com/launch?from=673dac796f9d59f53663839a&to=673dac796f9d59f5366383bc&date=2025-02-09&returnDate=&fromName=Dhaka&toName=Barishal&fromLat=23.810332&fromLong=90.4125181&toLat=22.7029212&toLong=90.3465971&adult=1&children=0&infant=0")
        const ticketPurchase = new TicketPurchase();
        ticketPurchase.tripSearch();
        
    })
    
})