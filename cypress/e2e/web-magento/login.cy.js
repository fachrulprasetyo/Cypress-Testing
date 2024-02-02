describe("Login Function", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("Verify Success Login", () => {
    cy.contains("Sign In").click();
    cy.get("#email").clear().type("sanbercode@gmail.com");
    cy.get("#pass").clear().type("Sanber123");
    cy.get("#send2").click();
    cy.get(".logged-in").should("contain.text", "Welcome,");
  });

  it("Verify Failed Login - Wrong Password", () => {
    cy.contains("Sign In").click();
    cy.get("#email").clear().type("sanbercode@gmail.com");
    cy.get("#pass").clear().type("sanber");
    cy.get("#send2").click();
    cy.get(".message-error").should(
      "contain.text",
      "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later."
    );
  });

  it("Verify Failed Login - without input credentials", () => {
    cy.contains("Sign In").click();
    cy.get("#email").clear().type(" ");
    cy.get("#pass").clear().type(" ");
    cy.get("#send2").click();
    cy.get(".mage-error").should("contain.text", "This is a required field.");
  });
});
