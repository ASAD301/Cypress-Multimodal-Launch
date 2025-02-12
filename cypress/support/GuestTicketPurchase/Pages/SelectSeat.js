
//const cypress = require("cypress");
class SelectSeat{

    constructor(){

        this.allSeats  = ".place-content-center button"; // All seats selector
        this.blockSeat = ".place-content-center button[disabled]";// Blocked (disabled) seats selector
        this.firstName = "#firstName";
        this.lastName  = "#lastName";
        this.phoneNumber = "#mobile";
    }
    ticketBookingWait(){
        cy.wait(5000);
    }

    selectSingleSeat() {
        // Get all seats
        cy.get(this.allSeats).each(($element, index) => {
            // Check if the seat is not disabled ( available for booking)
            if (!$element.is(":disabled")) {
                // Click the first available seat
                cy.wrap($element).click();  // Use `cy.wrap` to make the element a Cypress object
                cy.log(`Clicked on seat ${index}`);  // Log which seat was clicked
                return false;  // Exit the `.each()` loop after clicking once
            }
        });
    }

    passengerDetails(firstName , lastName , demoNumber){
        cy.get(this.firstName).type(firstName);
        cy.get(this.lastName).type(lastName);
        cy.get(this.phoneNumber).type(demoNumber);

    }
    continue(){
        cy.contains("button", "Continue");
    }


}
export default SelectSeat;