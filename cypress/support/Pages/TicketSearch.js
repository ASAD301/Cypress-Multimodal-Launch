//const cypress = require("cypress");
class TicketPurchase{

    constructor(){
        this.companyName = "div div h4[aria-expanded='false']";
        this.tripId = "div div .grid p span";

    }
    tripSearch(){
        const name = "nusrat shipping agency";
        const desireTripTime = "Departs 08:00 pm";
        //const shipName = cy.get(this.companyName).text()

        cy.get(this.companyName).each(($element , list , $index)=>{
            const name = $element.text();
            cy.log(name);
            // if(name){
                
            // }
        })
    
    }
}

export default TicketPurchase;