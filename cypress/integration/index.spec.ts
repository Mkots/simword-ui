// function get(id: string) {
//   return cy.get(`[data-cy="${id}"]`);
// }

describe("Basic flow", () => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  it("Should render the fruit gallery correctly", () => {
    cy.visit("/");
    cy.location("pathname").should("eq", "/");
  });
});
