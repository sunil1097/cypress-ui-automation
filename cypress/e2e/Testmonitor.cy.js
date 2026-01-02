import Monitor from "../../PageClass/Monitor";
import Login from "../../PageClass/Login";

describe('Validate Data Displayed on Monitor Page', () => {

    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/');
        
    });

    it('Validate monitor names and prices are correct', () => {

        cy.fixture('monitor').then((data) => {

            // ===== Login Flow =====
            const loginobj = new Login();

            loginobj.clickLogin();
            loginobj.setUserName(data.UserName);
            loginobj.setPassword(data.UserPassword);
            loginobj.clickLoginbtn();
            loginobj.verifyLoginSuccessMsg(data.loginmsg);

            

            // ===== Monitor Validation =====
            const monitorobj = new Monitor();

            monitorobj.isMonitorDisplayed();
            monitorobj.validateMonitor(data.monitor1, data.m1Price);
            monitorobj.validateMonitor(data.monitor2, data.m2Price);

            
        });
    });
});
