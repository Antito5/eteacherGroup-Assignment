import Registration from "../pages/Registration";
import Login from "../pages/Login";
import TaskPlanner from "../pages/TaskPlanner";


describe('NEXT button Test cases',()=>{
     it('Validate NEXT button redirect to Task Planner page',()=>{

        const registration=new Registration();
        const login=new Login();
        const taskPlanner= new TaskPlanner();
        cy.visit("http://127.0.0.1:5500/QA_Task%201_updated_v4.html");
        registration.getRegistrationFullName().type('Antonella Morano');
        registration.getRegistrationEmail().type('antito_morano@gmail.com');
        registration.getStartButton().click();
        login.getNextButton().click();
        taskPlanner.getTitle().should('be.visible').and('contains.text','Task Planner');
        taskPlanner.gettasks().should('be.visible');

    })
})

   
