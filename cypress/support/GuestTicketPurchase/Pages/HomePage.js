//const cypress = require("cypress");
class HomePage{

    constructor(){
        this.fromCityInputfield = "#from";
        this.searchFromDestination = "#search-from";
        this.location = "ul li .font-normal";
        this.toLocation = "#search-to"
        this.datefield = "#date";
        this.monthWithYear = ".vc-title";
    }

    searchFromCity(searchCityFrom){
        cy.get(this.fromCityInputfield).click();
        cy.get(this.searchFromDestination, {timeout: 10000 }).type("Dha");
        cy.get(this.location).each(($el, index , $list)=>{
           const text = $el.text();
            if(text.includes(searchCityFrom)){
                cy.get($el).click();
            }
        })
    }

    searchToCity(searchCityTo){
        cy.wait(3000);
        cy.get(this.toLocation, {timeout: 10000 }).type("Bari");
        cy.get(this.location).each(($el, index , $list)=>{
           const text = $el.text();
            if(text.includes(searchCityTo)){
                cy.get($el).click({force:true});
                return false;
            }
        })
    }

    selectDate(datetrip){
        cy.get(this.datefield).click();
        //cy.get("div[aria-label='Thursday 13 Feb 2025']").click();
        cy.get("div .vc-day-content").each(($element , list , $index)=>{
            const text = $element.text();
            cy.log(text);
            if(text.includes(datetrip)){
                cy.log($index);
                $element.click();
                return false;
            }
        })
    }

    serchtrip(){
        cy.contains("button", "Search").click();
        cy.get(".truncate h4").contains("Launches").click();
        //const currentURL = cy.url() 
    }
    
    
}

export default HomePage;

// blockSeat = button[disabled]