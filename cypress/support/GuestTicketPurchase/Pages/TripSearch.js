//const cypress = require("cypress");
class TripSearch{

    constructor(){
        this.companyName = ".w-full h4[aria-expanded='false'] ";
        this.tripTime = ".w-full .grid p span";

    }
    tripSearch(companyName, desireTripTime){
        
        cy.get(this.companyName).each(($element , list , $index)=>{
            const name = $element.text();
            cy.log(name);
            if(name.includes(companyName)){
                cy.get(".w-full .grid p span").each(($el, list, $index)=>{
                    const departsTime = $el.text();
                    cy.log(departsTime);
                    cy.get(".w-full div button span").contains("Select Seats").click();
                    // if(departsTime === desireTripTime){
                              
                    // }
                    return false;
                }) 
                
            }
            return false;

        })

    }

}

export default TripSearch;