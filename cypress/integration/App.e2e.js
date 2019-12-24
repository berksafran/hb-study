describe("Hepsiburada LinkVOTE Challenge E2E Test", () => {
  it("should have a header", () => {
    cy.visit("http://localhost:3000");

    // Add new link
    cy.get('[href="/addlink"]').click();
    cy.get('[id="linkName"]').type("Amazon");
    cy.get('[id="linkURL"]').type("http://www.amazon.com");
    cy.get('[type="submit"]')
      .contains("ADD")
      .click();
    cy.get('[id="linkName"]').type("Stackoverflow");
    cy.get('[id="linkURL"]').type("http://www.stackoverflow.com");
    cy.get('[type="submit"]')
      .contains("ADD")
      .click();
      cy.wait(3000);
      cy.get('#returnHome').contains('Return to List').click();

    // Up vote to new link x3 , Down vote x 1
    cy.get('[id="Amazon"]').contains('Up Vote').click();
    cy.get('[id="Amazon"]').contains('Up Vote').click();
    cy.get('[id="Stackoverflow"]').contains('Up Vote').click();
    cy.get('[id="Stackoverflow"]').contains('Down Vote').click();
    
    // Delete Stackoverflow link
    cy.get('[id="Stackoverflow"] > .removeItem').invoke('show').click();
    cy.get('.modal-content').contains('OK').click();

  });
});
