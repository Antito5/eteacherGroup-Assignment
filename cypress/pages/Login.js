class loginLocators{
    constructor(){
        this.title= '#loginTable > :nth-child(1) > h3';
        this.email='#email';
        this.password='#password';
        this.showHideCheck='#showPassword';
        this.loginButton='#loginForm';
        this.previousButton='#prevButton';
        this.nextButton='#nextButton';
        this.emailIndicator='#errorMsgMail';
        this.passwordIndicator='#errorMsgPwd';
     
    }
}

export default class Login{
    constructor(){
        this.locators=new loginLocators();
    }

    getTitle(){
        return cy.get(this.locators.title);
    }
    
    getEmail(){
        return cy.get(this.locators.email);
    }

    getPassword(){
        return cy.get(this.locators.password);
    }

    getShowHideCheck(){
        return cy.get(this.locators.showHideCheck);
    }

    getLoginButton(){
        return cy.get(this.locators.loginButton);
    }

    getPreviousButton(){
        return cy.get(this.locators.previousButton);
    }

    getNextButton(){
        return cy.get(this.locators.nextButton);
    }

    getEmailIndicator(){
        return cy.get(this.locators.emailIndicator);
    }

    getPasswordIndicator(){
        return cy.get(this.locators.passwordIndicator);
    }
}