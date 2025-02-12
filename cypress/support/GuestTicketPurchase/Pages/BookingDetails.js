
//const cypress = require("cypress");
class SelectSeat{

    constructor(){

        this.allSeats = ".place-content-center button"; // All seats selector
        this.blockSeat = ".place-content-center button[disabled]";// Blocked (disabled) seats selector
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
}
export default SelectSeat;