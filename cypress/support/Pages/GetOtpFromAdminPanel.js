class GetOtpFromAdminPanel{
    login(){

        cy.visit("https://admin.dev-jatri.jatritech.com/login");

        cy.get(".form-control[id='email']").type("john.doe@example.com");
        cy.get("#password").type("mypassword123");
        cy.get("button").contains("Log In").click();
    }

    getOtp(){

    }

}
export default GetOtpFromAdminPanel