import "cypress-real-events/support";

describe("Cypress Assignment", () => {
  it("Assignment - 1", () => {
    cy.log("Naviate to Website");
    cy.visit("https://www.spanishpoint.ie/");

    cy.log("Accept All Cookies");
    cy.get("#wt-cli-accept-btn").click();

    cy.wait(1000)
    cy.log("Hover on Solutions Menu")
    cy.get(
      '#menu-item-6191 > [href="https://www.spanishpoint.ie/solutions/"]'
    ).realHover();

    cy.wait(100);

    cy.log("Click on Modern Work");
    cy.contains("Modern Work")
      .should('be.visible')
      .click();
    cy.get(":nth-child(2) > a > .vc_tta-title-text")
      .scrollIntoView()
      .click({ force: true });


    cy.get('#\\31 612869843368-c8e2f605-d38c > .vc_tta-panel-body > .vc_row > :nth-child(2) > .vc_column-inner > :nth-child(1)')
      .within(() => {
        cy.log('Assert Title Employee Experience')
        cy.get('h3')
          .should("be.visible")
          .contains("Employee Experience");

        cy.get('p')
          .should('contain', 'Engaging, Mobile Intranet and Digital Workspace collaboration solution')
      })
  });
});