

describe('Various examples', () => {

  beforeEach(() => {
    cy.visit('/examples');
  })

  it('multi-page testing', () => {
    cy.getDataTest('nav-why-cypress').click();
    cy.location("pathname").should("equal", "/");

    cy.getDataTest("nav-overview").click();
    cy.location("pathname").should("equal", "/overview");

    cy.getDataTest("nav-fundamentals").click();
    cy.location("pathname").should("equal", "/fundamentals");

    cy.getDataTest("nav-forms").click();
    cy.location("pathname").should("equal", "/forms");

    cy.getDataTest("nav-examples").click();
    cy.contains(/Examples/i).should("exist");
    // cy.location("pathname").should("equal", "/examples");

    cy.getDataTest("nav-component").click();
    cy.location("pathname").should("equal", "/component");

    cy.getDataTest("nav-best-practices").click();
    cy.location("pathname").should("equal", "/best-practices");
  })

  it('intercepts', () => {
    // you can do intercepts and return the response you want
    cy.intercept("POST", "http://localhost:3000/examples", {
     fixture: "example.json" //this is the response we want to return
    })
    cy.getDataTest("post-button").click();

   })

  // methods to know
  //its, invoke, request, within, intercept, pause, location, visit, contains, get, wait

  // it.only()

  it.only('grudges', () => {
    cy.contains(/Add Some Grudges/i).click();

    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should('have.length', 0);
    });

    cy.getDataTest("clear-button").should("not.exist");

    cy.getDataTest("grudge-list-title").should("have.text", "Add Some Grudges");

    cy.getDataTest("grudge-input").within(() => {
      cy.get("input").type("some grudge");
    })
    cy.getDataTest("add-grudge-button").click();

    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 1);
    });

    cy.getDataTest("grudge-list-title").should("have.text", "Grudges");

    cy.getDataTest("grudge-input").within(() => {
      cy.get("input").type("another grudge");
    });

    cy.getDataTest("add-grudge-button").click();


      cy.getDataTest("grudge-list").within(() => {
        cy.get("li").should("have.length", 2);
        cy.get("li").its(0).should("contains.text", "some grudge");
      });
    
    // // delete a grudge
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").its(0).within(() => {
         cy.get("button").click();
       })
     });
    // cy.getDataTest("delete-single-grudge").first().click(); or use this

     cy.getDataTest("grudge-list").within(() => {
       cy.get("li").should("have.length", 1);
     });

    cy.getDataTest("clear-button").click();

      cy.getDataTest("grudge-list").within(() => {
        cy.get("li").should("have.length", 0);
      });

    cy.contains(/Add Some Grudges/i).click();

  })


})