
//const cypress = require("cypress");
import GetOtpFromAdminPanel from "../../support/Pages/GetOtpFromAdminPanel";
import LoginPage from "../../support/Pages/LoginPage";
describe("Controller suite", function()
{
    it("Controller Test File", function(){
        
        cy.visit("https://dev-jatri.jatritech.com/");
        const loginPage = new LoginPage();
        loginPage.goTo("01521443569");

        let otp = new GetOtpFromAdminPanel();
        otp.login();
        // const adminMail = "john.doe@example.com";
        // const adminPassword = "mypassword123"
        //otp.login("john.doe@example.com", "mypassword123" );

    })
    
})