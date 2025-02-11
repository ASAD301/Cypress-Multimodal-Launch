
//const cypress = require("cypress");
import HomePage from "../../support/GuestTicketPurchase/Pages/HomePage";
import TicketPurchase from "../../support/GuestTicketPurchase/Pages/TicketPurchase";


beforeEach(()=>{
    cy.visit("https://dev-jatri.jatritech.com/");
})

describe("Guest Ticket purchase Controller suite", function()
{
   
    it("Guest ticket purchase: Trip Search ", function(){
       // cy.visit("https://dev-jatri.jatritech.com/");
        const homePage= new HomePage();
        const searchCityFrom = "Dhaka";
        const searchCityTo = "Barishal";
        homePage.searchFromCity(searchCityFrom);
        homePage.searchToCity(searchCityTo);
        homePage.selectDate(); 
        homePage.serchtrip();

        const ticketPurchase = new TicketPurchase();
        const companyName = "nusrat shipping agency";
        const desireTripTime = "Departs 08:00 pm";
        ticketPurchase.tripSearch(companyName, desireTripTime);
        
    })
    
})