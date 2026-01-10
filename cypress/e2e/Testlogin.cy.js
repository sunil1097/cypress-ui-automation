import Login from "../../PageClass/Login";

describe('Validate User is Register', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Verify User is able to login', () => {
        cy.fixture('Testdata').then((registerUserdata) => {
            const loginobj = new Login();
            loginobj.clickLogin();
            loginobj.setUserName(registerUserdata.UserName);
            loginobj.setPassword(registerUserdata.UserPassword);
            loginobj.clickLoginbtn();
            loginobj.verifyLoginSuccessMsg(registerUserdata.loginmsg);
        })
    })
})