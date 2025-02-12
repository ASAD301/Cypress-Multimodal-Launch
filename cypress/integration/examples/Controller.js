
//const cypress = require("cypress");
import HomePage from "../../support/GuestTicketPurchase/Pages/HomePage";
import TripSearch from "../../support/GuestTicketPurchase/Pages/TripSearch";
import SelectSeat from "../../support/GuestTicketPurchase/Pages/BookingDetails";

beforeEach(()=>{
    cy.visit("https://dev-jatri.jatritech.com/");
})

describe("Guest Ticket purchase Controller suite", function()
{
   
    it("Guest ticket purchase Single Seat: Trip Search ", function(){
       // cy.visit("https://dev-jatri.jatritech.com/");
        const homePage= new HomePage();
        const searchCityFrom = "Dhaka";
        const searchCityTo = "Barishal";
        homePage.searchFromCity(searchCityFrom);
        homePage.searchToCity(searchCityTo);
        homePage.selectDate(); 
        homePage.serchtrip();

        const tripSearch = new TripSearch();
        const companyName = "nusrat shipping agency";
        const desireTripTime = "Departs 08:00 pm";
        tripSearch.tripSearch(companyName, desireTripTime);

        const selectSeat = new SelectSeat();
        selectSeat.ticketBookingWait();
        selectSeat.selectSingleSeat();
        
    })
    
})