describe('login', () => {
  it('login com sucesso', () => {
    cy.visit('/login');
    cy.get('#user').type('usuario@teste.com');
    cy.get('#password').type('123456');
    cy.get('#btnLogin').click();
    cy.url().should('include', '/my-account');
  });

  it('login com email vazio', () => {
    cy.visit('/login');
    cy.get('#password').type('123456');
    cy.get('#btnLogin').click();
    cy.contains('E-mail inválido.').should('be.visible');
  });

  it('login com senha vazia', () => {
    cy.visit('/login');
    cy.get('#user').type('usuario@teste.com');
    cy.get('#btnLogin').click();
    cy.contains('Senha inválida.').should('be.visible');
  });

  it('login com email e senha vazios', () => {
    cy.visit('/login');
    cy.get('#btnLogin').click();
    cy.contains('E-mail inválido.').should('be.visible');
  });

  it('login com email inválido', () => {
    cy.visit('/login');
    cy.get('#user').type('email-invalido');
    cy.get('#password').type('123456');
    cy.get('#btnLogin').click();
    cy.contains('E-mail inválido.').should('be.visible');
  });

  it('login com email e senha inválidos', () => {
    cy.visit('/login');
    cy.get('#user').type('email-invalido');
    cy.get('#password').type('12345');
    cy.get('#btnLogin').click();
    cy.contains('E-mail inválido.').should('be.visible');
  });

  it('login com senha de 1 dígito', () => {
    cy.visit('/login');
    cy.get('#user').type('usuario@teste.com');
    cy.get('#password').type('1');
    cy.get('#btnLogin').click();
    cy.contains('Senha inválida.').should('be.visible');
  });

  it('login com senha de 6 dígitos', () => {
    cy.visit('/login');
    cy.get('#user').type('usuario@teste.com');
    cy.get('#password').type('123456');
    cy.get('#btnLogin').click();
    cy.url().should('include', '/my-account');
  });

  it('login com senha maior que 6 dígitos', () => {
    cy.visit('/login');
    cy.get('#user').type('usuario@teste.com');
    cy.get('#password').type('1234567');
    cy.get('#btnLogin').click();
    cy.url().should('include', '/my-account');
  });
});
