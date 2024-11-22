describe('Fundamentals test', () => {

  beforeEach(() => { 
    cy.visit("/fundamentals");
  });

  it('Contains correct header text', () => {
    cy.getDataTest('fundamentals-header').should('contain.text', "Testing Fundamentals"); //i added cy.getDataTest to commands.js
    // cy.get('[data-test="fundamentals-header"]').should('contain.text' , "Testing Fundamentals");
  })

    it("Accordion works correctly", () => {
      // .pause(); is a good way to debug your tests (it.only)
      cy.contains(/Your tests will exist in a describe block/).should('not.be.visible');
      cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
      cy.contains(/Your tests will exist in a describe block/).should("be.visible");
      cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
      cy.contains(/Your tests will exist in a describe block/).should("not.be.visible");
    });

})