import { default as ItemsAccordion } from "@/app/components/Accordion"
import { items } from "@/app/fundamentals/page"

describe('Accordion.cy.jsx', () => {
  it('Items accordion', () => {
    cy.mount(<ItemsAccordion items={items} />);
    cy.getDataTest("accordion-wrapper").within(() => {
      cy.get('[data-test^="accordion-item-"]').should(
        "have.length",
        items.length
      );
    });

    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible');

    // use the within to go inside a tag and find what you need
    cy.getDataTest("accordion-item-1").within(() => {
      cy.get("[role=button]").click();
    });
    cy.contains(/Your tests will exist in a describe block/i).should(
      "be.visible"
    );

    cy.getDataTest("accordion-item-1").within(() => {
      cy.get("[role=button]").click();
    });

    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
  })
})