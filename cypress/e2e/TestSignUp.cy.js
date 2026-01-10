import SignUp from "../../PageClass/Signup";

describe('Validate User is Register', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Verify User is able to signup', () => {
        cy.fixture('Testdata').then((registerUserdata) => {
            const signUpObj = new SignUp();

            signUpObj.clickSignup();
            signUpObj.setUserName(
                registerUserdata.UserName + Math.floor(Math.random() * 1000)
            );
            signUpObj.setPassword(registerUserdata.UserPassword);
            signUpObj.clickSubmit();
            signUpObj.verifyAlertMessage(registerUserdata.expectedsignupMsg);
        });
    });

    it('Verify User Exist message', () => {
        cy.fixture('Testdata').then((registerUserdata) => {
            const signUpObj = new SignUp();

            signUpObj.clickSignup();
            signUpObj.setUserName(registerUserdata.UserName);
            signUpObj.setPassword(registerUserdata.UserPassword);
            signUpObj.clickSubmit();
            signUpObj.verifyAlertMessage(registerUserdata.userExistMsg);
        });
    });

    it('Verify Invalid Data message', () => {
        cy.fixture('Testdata').then((registerUserdata) => {
            const signUpObj = new SignUp();

            signUpObj.clickSignup();
            signUpObj.clickSubmit();
            signUpObj.verifyAlertMessage(registerUserdata.InvalidDataMsg);
        });
    });
});
