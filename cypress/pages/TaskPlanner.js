class taskPlannerLocators{
    constructor(){
        this.title= '#taskPlanner';
        this.tasks='#taskList';
    }
}

export default class TaskPlanner{
    constructor(){
        this.locators=new taskPlannerLocators();
    }

    getTitle(){
        return cy.get(this.locators.title);
    }
    
    gettasks(){
        return cy.get(this.locators.tasks);
    }

}