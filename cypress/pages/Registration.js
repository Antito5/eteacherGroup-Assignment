class registrationLocators{
    constructor(){
        this.registrationFullName='#candidateName';
        this.registrationEmail='#candidateMail';
        this.startButton='#startButton';
        this.typeFullNameMessage='#errorMsgRegName';
        this.validEmailMessage='#errorMsgRegMail';
    }
}

export default class Registration{
    constructor(){
        this.locators=new registrationLocators();
    }

    getRegistrationFullName(){
        return cy.get(this.locators.registrationFullName);
    }

    getRegistrationEmail(){
        return cy.get(this.locators.registrationEmail);
    }

    getStartButton(){
        return cy.get(this.locators.startButton);
    }
   
    getTypeFullNameMessage(){
        return cy.get(this.locators.typeFullNameMessage);

    }

    getValidEmailMessage(){
        return cy.get(this.locators.validEmailMessage);

    }
}
