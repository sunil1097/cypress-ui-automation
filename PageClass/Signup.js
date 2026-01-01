class Signup{

    registerBtn = "a#signin2";
    usernameInput = "#sign-username";
    passwordInput = "#sign-password";
    signUpBtn = "#signInModal .btn-primary";

    clickSignup(){
        cy.get(this.registerBtn).click();
        cy.contains('h5','Sign up').should('be.visible');
        }

    setUserName(username){
        cy.get(this.usernameInput).clear().type(username);

    }
    setPassword(password){
        cy.get(this.passwordInput).clear().type(password);
    }
    clickSubmit(){
        cy.get(this.signUpBtn).click();
    }
    verifyAlertMessage(expectedMessage){
        cy.on('window:alert',(text)=>{
            expect(text).to.contain(expectedMessage)
        });
    }
}
export default Signup;