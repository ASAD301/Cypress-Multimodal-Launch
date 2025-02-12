
const cypress = require("cypress");
class PaymentPage{
    constructor(){
        this.sslCommerz = "button[value='SSLCOMMERZ']";
        //this.bKash = "button[value='BKASH']";
        this.checkBox = "button[role='checkbox']";
        this.paymentGetway = ".banking_tabs li:nth-child(2)";
        this.getwayBkash= "#menu2 ul li";
        this.successBtn = "input[value='Success']";
    }

    payment(){
        cy.get(this.sslCommerz).should("be.visible").click();
        cy.get(this.checkBox).click();
        cy.contains("button", "Proceeded to pay").click();
    }

    paymentSuccess(){
        cy.get(this.paymentGetway).should("be.visible").click();
        cy.get(this.getwayBkash).first().click();
        cy.get(this.successBtn).click();
    }

}

export default PaymentPage;