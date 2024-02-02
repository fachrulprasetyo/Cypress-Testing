describe("Regist Function", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it.only("Verify Success Registration", () => {
    cy.contains("Create an Account").click();
    cy.get("#firstname").clear().type("Sanbercode");
    cy.get("#lastname").clear().type("Academy");
    cy.get("#email_address").clear().type("sanbercode123@gmail.com");
    cy.get("#password").clear().type("Sanber123");
    cy.get("#password-confirmation").clear().type("Sanber123");
    cy.get(".action.submit.primary").click();
    cy.get(".message-success").should(
      "contain.text",
      "Thank you for registering with Main Website Store."
    );
  });

  // Failed Regist [email has already been used]
  it("Verify Failed Registration", () => {
    cy.contains("Create an Account").click();
    cy.get("#firstname").clear().type("Sanber");
    cy.get("#lastname").clear().type("Code");
    cy.get("#email_address").clear().type("sanbercode@gmail.com");
    cy.get("#password").clear().type("Sanber123");
    cy.get("#password-confirmation").clear().type("Sanber123");
    cy.get(".action.submit.primary").click();
    cy.get(".message-error").should(
      "contain.text",
      "There is already an account with this email address."
    );
  });
});
