//const cypress = require("cypress");
class LoginPage{
    goTo(phoneNumber){
            
        cy.get("button").contains("Login").click();
        cy.get("input#mobile").type(phoneNumber);
        cy.get("button").contains("Get OTP").click();
    }

}
export default LoginPage