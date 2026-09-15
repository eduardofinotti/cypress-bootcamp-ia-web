class CadastroPage {
  visitar() {
    cy.visit('/register');
  }

  preencherNome(nome) {
    if (nome) {
      cy.get('#user').type(nome);
    }
  }

  preencherEmail(email) {
    if (email) {
      cy.get('#email').type(email);
    }
  }

  preencherSenha(senha) {
    if (senha) {
      cy.get('#password').type(senha);
    }
  }

  cadastrar() {
    cy.get('#btnRegister').click();
  }

  validarMensagem(mensagem) {
    cy.contains(mensagem).should('be.visible');
  }

  validarCadastroComSucesso() {
    cy.url().should('include', '/my-account');
  }
}

module.exports = new CadastroPage();
