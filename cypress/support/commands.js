// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
/// <reference types="cypress"/>
    Cypress.Commands.add('LoginaPI',()=>{
        cy.request("POST", "https://api.multimode.dev-jatri.jatritech.com/auth/api/v1/login",
        {"phone": "0100000000", "loginType": "PHONE"}).then(function(response){
            cy.log(response.body);
            expect(response.status).to.equal(200);
            
            //Cypress.env("token", response.body.token);
            //window.localStorage.setItem("token", response.body.token);
            const tokenSession = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTNiNDQ3ZGJjODJkNDEzMWY5NjkzMiIsInBob25lIjoiMDE1MDAwMDAwMDAiLCJsb2dpblR5cGUiOiJQSE9ORSIsImRldmljZVR5cGUiOiJXRUIiLCJpYXQiOjE3Mzg2NjA4NjMsImV4cCI6MTczODcyNDQwMH0.AjgYiNq766d3g62Z_-Rbyllc4M0qchIe94kZM2XllSs";
            cy.setCookie("token",tokenSession );

        })

    })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })