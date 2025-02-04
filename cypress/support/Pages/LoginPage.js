//const cypress = require("cypress");
class LoginPage{
    login(phoneNumber){
        cy.get("input#mobile").type(phoneNumber);
        cy.get("button").contains("Get OTP").click();
    }

}
export default LoginPage;