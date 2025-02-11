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

    searchFromCity(cityName){
        cy.get(this.fromCityInputfield).click();
        cy.get(this.searchFromDestination, {timeout: 10000 }).type("Dha");
        cy.get(this.location).each(($el, index , $list)=>{
           const text = $el.text();
            if(text.includes(cityName)){
                cy.get($el).click();
            }
        })
    }

    searchToCity(cityName){
        cy.wait(3000);
        cy.get(this.toLocation, {timeout: 10000 }).type("Bari");
        cy.get(this.location).each(($el, index , $list)=>{
           const text = $el.text();
            if(text.includes(cityName)){
                cy.get($el).click();
                return false;
            }
        })
    }

    selectDate(){
        cy.get(this.datefield).click();
        cy.get("div[aria-label='Thursday 13 Feb 2025']").click();
    }

    serchtrip(){
        cy.contains("button", "Search").click({force:true});
        cy.get(".truncate h4").contains("Launches").click();
        //const currentURL = cy.url() 
    }
    
    
}

export default HomePage;