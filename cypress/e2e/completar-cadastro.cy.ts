import { toCyString } from "../helpers/kebab.helper";

describe("Submeter Proposta no sistema", () => {
  context("Submeter Proposta com dados válidos", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("Visita a página inicial usando as credenciais do usuário na fixture", () => {
      cy.fixture("criar-conta").then((dados) => {
        cy.typeLogin(dados.email, dados.senha);
        cy.get('[data-cy="user-menu"]').should("be.visible"); // Verifica se o menu do usuário está visível, indicando que o login foi bem-sucedido
      });
      cy.get('.css-1kp0gbe > img').click(); // Clica na foto do usuário para abrir o menu de opções
      cy.get('[data-cy="editar-perfil"] > .css-ega6px').click(); // Clica na opção "Editar Perfil" para acessar a página de edição de perfil
    });
  });
});

