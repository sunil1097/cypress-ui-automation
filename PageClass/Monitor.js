class Monitor {

    // ===== Locators (CSS – stable) =====
    monitorCategory = "a[onclick=\"byCat('monitor')\"]";
    productCards = "#tbodyid .card";
    productTitle = ".card-title a";
    productPrice = "h5";

    // ===== Actions & Validations =====

    isMonitorDisplayed() {
        // Click Monitors category
        cy.get(this.monitorCategory).click();

        // Ensure products are loaded
        cy.get(this.productCards).should('have.length.greaterThan', 0);
    }

    validateMonitor(name, price) {
        cy.get(this.productCards).each(($card) => {
            cy.wrap($card)
              .find(this.productTitle)
              .invoke('text')
              .then((text) => {
                  if (text.trim() === name) {
                      cy.wrap($card)
                        .find(this.productPrice)
                        .should('contain.text', price);
                  }
              });
        });
    }
}

export default Monitor;
