import Login from "../../PageClass/Login";
import AddProduct from "../../PageClass/AddProduct";

describe('Validate User is able to make purchase', () => {

  beforeEach(() => {
    
    cy.visit('https://www.demoblaze.com/');
    const prdobj = new AddProduct()
  prdobj.resetCartState()

  cy.reload() 
    cy.viewport(1920, 1080);
  });

  it('Validate Add Product', () => {

    cy.fixture('Product').then((data) => {

      const loginobj = new Login();

      loginobj.clickLogin();
      loginobj.setUserName(data.UserName);
      loginobj.setPassword(data.UserPassword);
      loginobj.clickLoginbtn();
      loginobj.verifyLoginSuccessMsg(data.loginmsg);

      const prdobj = new AddProduct();

      // ---- Product selection ----
      prdobj.selectPhoneCategory();
      prdobj.selectSamsungMobile();
      prdobj.addProductToCart();
      prdobj.openCart();
      prdobj.verifyTotalPrice('$360');
      prdobj.placeOrder();

      // ---- Fill order form ----
      prdobj.fillOrderForm({
        name: data.name,
        country: data.Country,
        city: data.City,
        card: data.Creditcard,
        month: data.Month,
        year: data.Year
      });

      // ---- Purchase & validation ----
      prdobj.confirmPurchase();
      prdobj.validateOrderSuccess();
      prdobj.logoutAndVerify();

    });
  });
});
