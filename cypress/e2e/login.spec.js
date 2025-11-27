import Registration from "../pages/Registration";
import Login from "../pages/Login";

describe('Login Test Cases',()=>{

    describe('Login valid email/password test cases',()=>{

    it('Validate Login with correct and complete credentials',()=>{

        /*
        In this test case, I am only automating the validation of the input fields.
        Since the login functionality is currently not working, I can't verify
        the expected behavior after a successful login. 
        Therefore, no assertion is included for a correct login flow.
        */
        const registration=new Registration();
        const login=new Login();
        cy.visit("http://127.0.0.1:5500/QA_Task%201_updated_v4.html");
        registration.getRegistrationFullName().type('Antonella Morano');
        registration.getRegistrationEmail().type('antito_morano@gmail.com');
        registration.getStartButton().click();
        login.getEmail().type('antito_morano@gmail.com');
        login.getEmailIndicator().should('have.text','Valid email');
        login.getPassword().type('Antonella.2025');
        login.getPasswordIndicator().should('have.text','Valid Password');

    })

    it('Validate Show/Hide check is working correctly',()=>{
        const registration=new Registration();
        const login=new Login();
        cy.visit("http://127.0.0.1:5500/QA_Task%201_updated_v4.html");
        registration.getRegistrationFullName().type('Antonella Morano');
        registration.getRegistrationEmail().type('antito_morano@gmail.com');
        registration.getStartButton().click();
        login.getEmail().type('antito_morano@gmail.com');
        login.getPassword().type('Antonella.2025');
        login.getPassword().should('have.attr', 'type', 'password');
        login.getShowHideCheck().click();
        login.getPassword().should('have.attr', 'type', 'text');

    })

    })

    describe('Email validations test cases',()=>{
    it('Validate Login with email that start without one or more alphabetic character',()=>{
        const registration=new Registration();
        const login=new Login();
        cy.visit("http://127.0.0.1:5500/QA_Task%201_updated_v4.html");
        registration.getRegistrationFullName().type('Antonella Morano');
        registration.getRegistrationEmail().type('antito_morano@gmail.com');
        registration.getStartButton().click();
        login.getEmail().type('123@gmail.com');
        login.getEmailIndicator().should('have.text','Invalid email');       

    })

    it('Validate Login with email that has incorrect domain',()=>{
        const registration=new Registration();
        const login=new Login();
        cy.visit("http://127.0.0.1:5500/QA_Task%201_updated_v4.html");
        registration.getRegistrationFullName().type('Antonella Morano');
        registration.getRegistrationEmail().type('antito_morano@gmail.com');
        registration.getStartButton().click();
        login.getEmail().type('antito_morano@.com');
        login.getEmailIndicator().should('have.text','Invalid email');       

    })

    it('Validate Login with email without a dot before than TLD',()=>{
        const registration=new Registration();
        const login=new Login();
        cy.visit("http://127.0.0.1:5500/QA_Task%201_updated_v4.html");
        registration.getRegistrationFullName().type('Antonella Morano');
        registration.getRegistrationEmail().type('antito_morano@gmail.com');
        registration.getStartButton().click();
        login.getEmail().type('antito_morano@gmailcom');
        login.getEmailIndicator().should('have.text','Invalid email');       

    })
    it('Validate Login with email that has a numeric TLD',()=>{
        const registration=new Registration();
        const login=new Login();
        cy.visit("http://127.0.0.1:5500/QA_Task%201_updated_v4.html");
        registration.getRegistrationFullName().type('Antonella Morano');
        registration.getRegistrationEmail().type('antito_morano@gmail.com');
        registration.getStartButton().click();
        login.getEmail().type('antito_morano@gmail.1');
        login.getEmailIndicator().should('have.text','Invalid email');       

    })

    it('Validate Login with email that has TLD with less 2 characters',()=>{
        const registration=new Registration();
        const login=new Login();
        cy.visit("http://127.0.0.1:5500/QA_Task%201_updated_v4.html");
        registration.getRegistrationFullName().type('Antonella Morano');
        registration.getRegistrationEmail().type('antito_morano@gmail.com');
        registration.getStartButton().click();
        login.getEmail().type('antito_morano@gmail.c');
        login.getEmailIndicator().should('have.text','Invalid email');       

    })


    })

    describe('Password validations test cases',()=>{
    it('Validate Login with a password with less than 8 characters',()=>{
        const registration=new Registration();
        const login=new Login();
        cy.visit("http://127.0.0.1:5500/QA_Task%201_updated_v4.html");
        registration.getRegistrationFullName().type('Antonella Morano');
        registration.getRegistrationEmail().type('antito_morano@gmail.com');
        registration.getStartButton().click();
        login.getEmail().type('antito_morano@gmail.com');
        login.getPassword().type('Asd.10');
        login.getPasswordIndicator().should('have.text','Invalid Password');       

    })

    it('Validate Login with a password without any uppercase letter',()=>{
        const registration=new Registration();
        const login=new Login();
        cy.visit("http://127.0.0.1:5500/QA_Task%201_updated_v4.html");
        registration.getRegistrationFullName().type('Antonella Morano');
        registration.getRegistrationEmail().type('antito_morano@gmail.com');
        registration.getStartButton().click();
        login.getEmail().type('antito_morano@gmail.com');
        login.getPassword().type('asd.102025');
        login.getPasswordIndicator().should('have.text','Invalid Password');       

    })

    it('Validate Login with a password without any lowercase letter',()=>{
        const registration=new Registration();
        const login=new Login();
        cy.visit("http://127.0.0.1:5500/QA_Task%201_updated_v4.html");
        registration.getRegistrationFullName().type('Antonella Morano');
        registration.getRegistrationEmail().type('antito_morano@gmail.com');
        registration.getStartButton().click();
        login.getEmail().type('antito_morano@gmail.com');
        login.getPassword().type('ASD.102025');
        login.getPasswordIndicator().should('have.text','Invalid Password');       

    })

    it('Validate Login with a password without any number',()=>{
        const registration=new Registration();
        const login=new Login();
        cy.visit("http://127.0.0.1:5500/QA_Task%201_updated_v4.html");
        registration.getRegistrationFullName().type('Antonella Morano');
        registration.getRegistrationEmail().type('antito_morano@gmail.com');
        registration.getStartButton().click();
        login.getEmail().type('antito_morano@gmail.com');
        login.getPassword().type('Asd.asdasd');
        login.getPasswordIndicator().should('have.text','Invalid Password');       

    })

    it('Validate Login with a password without any special character',()=>{
        const registration=new Registration();
        const login=new Login();
        cy.visit("http://127.0.0.1:5500/QA_Task%201_updated_v4.html");
        registration.getRegistrationFullName().type('Antonella Morano');
        registration.getRegistrationEmail().type('antito_morano@gmail.com');
        registration.getStartButton().click();
        login.getEmail().type('antito_morano@gmail.com');
        login.getPassword().type('Asd20252025');
        login.getPasswordIndicator().should('have.text','Invalid Password');       

    })

    })

 
    describe('Password validations test cases',()=>{
    it('Validate Login without any field',()=>{
        /*
        For this test case, the requirements do not specify any behavior
        for missing required fields. However, following usability best practices,
        the system should display a clear message informing that
        these fields are mandatory.
        */
        const registration=new Registration();
        const login=new Login();
        cy.visit("http://127.0.0.1:5500/QA_Task%201_updated_v4.html");
        registration.getRegistrationFullName().type('Antonella Morano');
        registration.getRegistrationEmail().type('antito_morano@gmail.com');
        registration.getStartButton().click();
        login.getShowHideCheck().click();
        login.getEmailIndicator().should('have.text','Email is required');       
        login.getPasswordIndicator().should('have.text','Password is required');       

    })

    })


})