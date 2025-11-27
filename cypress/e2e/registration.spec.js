import Registration from "../pages/Registration";
import Login from "../pages/Login";

describe('Registration Test Cases',()=>{

    it('Validate Registration with valid and complete credentials',()=>{
        const registration=new Registration();
        const login=new Login();
        cy.visit("/QA_Task%201_updated_v4.html");
        registration.getRegistrationFullName().type('Antonella Morano');
        registration.getRegistrationEmail().type('antitomorano@gmail.com');
        registration.getStartButton().click();
        login.getTitle().should('be.visible').should('contains.text','User Story');


    })

    it('Validate Registration with incorrect full name',()=>{
        const registration=new Registration();
        cy.visit("/QA_Task%201_updated_v4.html");
        registration.getRegistrationFullName().type('-,.,-,-');
        registration.getRegistrationEmail().type('john@gmail.com');
        registration.getStartButton().click();
        registration.getTypeFullNameMessage().should('have.text','Please type your full name');

    })

    it('Validate Registration with incomplete full name',()=>{
        const registration=new Registration();
        cy.visit("/QA_Task%201_updated_v4.html");
        registration.getRegistrationFullName().type('Maria');
        registration.getRegistrationEmail().type('maria123@gmail.com');
        registration.getStartButton().click();
        registration.getTypeFullNameMessage().should('have.text','Please type your full name');

    })

    
    it('Validate Registration with invalid email',()=>{
        const registration=new Registration();
        cy.visit("/QA_Task%201_updated_v4.html");
        registration.getRegistrationFullName().type('Antonella Morano');
        registration.getRegistrationEmail().type('asd');
        registration.getStartButton().click();
        registration.getValidEmailMessage().should('have.text','Please enter a valid email');

    })
    it('Validate Registration without any value',()=>{
        const registration=new Registration();
        cy.visit("/QA_Task%201_updated_v4.html");
        registration.getStartButton().click();
        registration.getValidEmailMessage().should('have.text','Please enter a valid email');

    })
})