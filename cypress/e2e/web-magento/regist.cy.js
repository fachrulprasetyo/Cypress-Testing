describe("Regist Function", () => {
  it("Verify Success Registration", () => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.contains("Create an Account").click();
    cy.get("#firstname").clear().type("Sanber");
    cy.get("#lastname").clear().type("Code");
    cy.get("#email_address").clear().type("sanbercode@gmail.com");
    cy.get("#password").clear().type("sanber123");
    cy.get("#password-confirmation").clear().type("sanber123");
    cy.get(".action.submit.primary").click();
  });
});
