class AddProduct {

  // ================= LOCATORS =================

  phonesCategory() {
    return cy.contains('a', 'Phones')
  }

  samsungMobile() {
    return cy.contains('a', 'Samsung galaxy s6')
  }

  productPrice() {
    return cy.get('h3.price-container')
  }

  addToCartBtn() {
    return cy.contains('a', 'Add to cart')
  }

  cartBtn() {
    return cy.contains('a', 'Cart')
  }

  cartRows() {
    return cy.get('tbody tr')
  }

  deleteBtn() {
    return cy.contains('Delete')
  }

  totalPrice() {
    return cy.get('#totalp')
  }

  placeOrderBtn() {
    return cy.contains('button', 'Place Order')
  }

  orderModal() {
    return cy.get('#orderModal')
  }

  nameInput() {
    return cy.get('#name')
  }

  countryInput() {
    return cy.get('#country')
  }

  cityInput() {
    return cy.get('#city')
  }

  cardInput() {
    return cy.get('#card')
  }

  monthInput() {
    return cy.get('#month')
  }

  yearInput() {
    return cy.get('#year')
  }

  purchaseBtn() {
    return cy.contains('button', 'Purchase')
  }

  successMessage() {
    return cy.get('.sweet-alert h2')
  }

  orderDetails() {
    return cy.get('.lead.text-muted')
  }

  okBtn() {
    return cy.contains('button', 'OK')
  }

  logoutBtn() {
    return cy.contains('a', 'Log out')
  }

  loginBtn() {
    return cy.contains('a', 'Log in')
  }
  resetCartState() {
  cy.window().then(win => {
    win.localStorage.removeItem('cart')
  })
}


  // ================= ACTIONS =================

  /** 🔑 HARD RESET — ensures test isolation */
  clearCartIfAny() {
    cy.visit('https://www.demoblaze.com/cart.html')

    this.cartRows().then(rows => {
      if (rows.length > 0) {
        cy.wrap(rows).each(() => {
          this.deleteBtn().click()
        })
      }
    })

    this.totalPrice().should('have.text', '0')
  }

  selectPhoneCategory() {
    this.phonesCategory().click()
  }

  selectSamsungMobile() {
    this.samsungMobile().click()
  }

  addProductToCart() {
    this.productPrice().should('contain.text', '$360')
    this.addToCartBtn().click()
  }

  openCart() {
    this.cartBtn().click()
  }

  verifyTotalPrice(expectedPrice) {
    this.totalPrice().should('have.text', expectedPrice)
  }

  placeOrder() {
    this.placeOrderBtn().click()
  }

  fillOrderForm({ name, country, city, card, month, year }) {
    this.orderModal().should('be.visible')

    this.nameInput().clear().type(name)
    this.countryInput().clear().type(country)
    this.cityInput().clear().type(city)
    this.cardInput().clear().type(card)
    this.monthInput().clear().type(month)
    this.yearInput().clear().type(year)
  }

  confirmPurchase() {
    this.purchaseBtn().click()
  }

  // ================= VALIDATIONS =================

  validateOrderSuccess() {
    this.successMessage()
      .should('be.visible')
      .and('contain.text', 'Thank you for your purchase!')

    this.orderDetails()
      .should('be.visible')
      .then(text => {
        cy.log(`Order Details: ${text.text()}`)
      })

    this.okBtn().click()
  }

  logoutAndVerify() {
    this.logoutBtn().click({ force: true })
    this.loginBtn().should('be.visible')
  }
}

export default AddProduct
