describe("Form - Testing our form inputs", function () {
  this.beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("check inputs", function () {
    cy.get('[data-cy="name"]').type("Chance").should("have.value", "Chance");
    cy.get('[data-cy="email"]')
      .type("test@test.com")
      .should("have.value", "test@test.com");
    cy.get("[data-cy=motivation]")
      .type("I want to help")
      .should("have.value", "I want to help");
    cy.get("#positions").select("Yard Work").should("have.value", "Yard Work");
    cy.get('[type="checkbox"]').check().should("be.checked");
    cy.get("[data-cy=submit]").click();
  });
});

// cy.get('[data-cy="name"]').type("Emily").should("have.value", "Emily");
//     cy.get('[data-cy="email"]')
//       .type("test@gmail.com")
//       .should("have.value", "test@gmail.com");
//     cy.get("[data-cy=motivation]")
//       .type("I want to help")
//       .should("have.value", "I want to help");
//     cy.get("#positions").select("Yard Work").should("have.value", "Yard Work");
//     cy.get('[type="checkbox"]').check().should("be.checked");
//     cy.get("[data-cy=submit]").click();
