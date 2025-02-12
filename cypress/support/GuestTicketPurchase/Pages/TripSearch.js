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
            if(name === companyName){
                cy.get(".w-full .grid p span").each(($el, list, $index)=>{
                    const departsTime = $el.text();
                    cy.log(departsTime);
                    if(departsTime === desireTripTime){
                        cy.get(".w-full button").contains("Select Seats").click();
                        
                    }
                }) 
                return false;
            }

        })

    }

}

export default TripSearch;