
//const cypress = require("cypress");
class PaymentPage{
    constructor(){
        this.sslCommerz = "button[value='SSLCOMMERZ']";
        this.bKash = "button[value='BKASH']";
        this.checkBox = "button[role='checkbox']";
        this.paymentGetway = "ul li .ng-star-inserted";
        this.getwayBkash= ".payment_token .tab-content ul li:visible";
        this.successBtn = "input[value='Success']";
    }

    payment(){
        cy.wait(5000);
        cy.get(this.sslCommerz).click();
        cy.get(this.checkBox).click();
        cy.contains("button", "Proceeded to pay").click();
    }

    paymentSuccess(){
        cy.get(this.paymentGetway).contains("Mobile Banking ").click();
        cy.get(this.getwayBkash).first().click();
        cy.get(this.successBtn).click();
    }

}

export default PaymentPage;