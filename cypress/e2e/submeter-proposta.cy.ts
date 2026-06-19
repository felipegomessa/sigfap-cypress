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
      cy.get('[data-cy="editais-ver-mais"]').click(); // Clica no menu de propostas
      cy.get(':nth-child(6) > .css-1g8exof > .css-qvg66t').click(); // Clica no edital específico
      cy.get('[data-cy="criar-proposta"]').click(); // Clica no botão "Criar Proposta"
      cy.get('[data-cy="caracterizacao"]').type("teste"); // Preenche o campo "Caracterização"
      cy.get('[data-cy="coordenacao"]').type("teste"); // Preenche o campo "Coordenação"
      cy.get('[data-cy="apresentacao"]').type("teste"); // Preenche o campo "Apresentação"
      cy.get('[data-cy="anexos"]').type("teste"); // Preenche o campo "Anexos"
      cy.get('[data-cy="finalizacao"]').type("teste"); // Preenche o campo "Finalização"
      cy.get('[data-cy="verificar-pendencias"]').click(); // Clica no botão "Verificar Pendências"
      cy.get('[data-cy="submeter-proposta"]').click(); // Clica no botão "Submeter Proposta"
    });
  });
});