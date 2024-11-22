

describe('forms tests', () => {
  beforeEach(() => {
    cy.visit('/forms');
  })

  it('Test subscribe form', () => {
    // cy.contains(/testing forms/i);
    // // find the form
    // cy.getDataTest('subscribe-form').find('input').type("akinsiku13@gmail.com");
    // cy.contains(/Successfully subbed: akinsiku13@gmail.com!/i).should('not.exist');
    // cy.getDataTest('subscribe-button').click();
    // cy.contains(/Successfully subbed: akinsiku13@gmail.com!/i).should('exist');

    cy.contains(/testing forms/i);
    // find the form input
    cy.getDataTest("subscribe-form").find("input").as("subscribe-input"); //alias
    cy.get("@subscribe-input").type("akinsiku13@gmail.com");
    cy.contains(/Successfully subbed: akinsiku13@gmail.com!/i).should(
      "not.exist"
    );
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed: akinsiku13@gmail.com!/i).should("exist");
    cy.wait(3000);
    cy.contains(/Successfully subbed: akinsiku13@gmail.com!/i).should(
      "not.exist"
    );

    cy.get("@subscribe-input").type("akinsiku13@gmail"); //fail test
    cy.contains(/invalid email: akinsiku13@gmail!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/invalid email: akinsiku13@gmail!/i).should("exist");

    cy.wait(3000);
    cy.contains(/invalid email: akinsiku13@gmail!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/fail!/i).should("exist");
  })

})