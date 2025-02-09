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
// /// <reference types="cypress"/>
//     Cypress.Commands.add('LoginaPI',()=>{
//         cy.request("POST", "https://api.multimode.dev-jatri.jatritech.com/auth/api/v1/login",
//         {"phone": "0100000000", "loginType": "PHONE"}).then(function(response){
//             cy.log(response.body);
//             expect(response.status).to.equal(200);
            
//             //Cypress.env("token", response.body.token);
//             //window.localStorage.setItem("token", response.body.token);
//             const tokenSession = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OTVmZDM3MTFmYmU4NGJlMWZkODdhZiIsInBob25lIjoiMDE1NjAwMDAwMDAiLCJsb2dpblR5cGUiOiJQSE9ORSIsImRldmljZVR5cGUiOiJXRUIiLCJpYXQiOjE3MzkwODIwMTUsImV4cCI6MTczOTE1NjQwMH0.VAVRKKlKFB7M28c8n-QZfhJ3PhW6u57dQQ1mItvYV4I";
//             cy.setCookie("token",tokenSession );

//         })

//     })
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