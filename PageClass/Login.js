class Login {

    // ===== Locators (CSS – stable) =====
    loginbtn = "#login2";
    usernametxt = "#loginusername";
    passwordtxt = "#loginpassword";
    signInbtn = "#logInModal .btn-primary";
    welcomemsg = "#nameofuser";

    // ===== Actions =====
    clickLogin() {
        cy.get(this.loginbtn).click();
        cy.contains('h5', 'Log in').should('be.visible');
    }

    setUserName(username) {
        cy.get(this.usernametxt).clear().type(username);
    }

    setPassword(password) {
        cy.get(this.passwordtxt).clear().type(password);
    }

    clickLoginbtn() {
        cy.get(this.signInbtn).click();
    }

    verifyLoginSuccessMsg(successMsg) {
        cy.get(this.welcomemsg)
          .should('be.visible')
          .and('contain.text', successMsg);
    }
}

export default Login;
