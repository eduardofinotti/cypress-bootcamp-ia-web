const cadastroPage = require('../pages/cadastro.page');

describe('cadastro de usuário', () => {
  let email;

  beforeEach(() => {
    email = `usuario${Date.now()}@teste.com`;
    cadastroPage.visitar();
  });

  it('cadastro com sucesso', () => {
    cadastroPage.preencherNome('Joao da Silva');
    cadastroPage.preencherEmail(email);
    cadastroPage.preencherSenha('123456');
    cadastroPage.cadastrar();
    cadastroPage.validarCadastroComSucesso();
  });

  it('cadastro com nome vazio', () => {
    cadastroPage.preencherEmail(email);
    cadastroPage.preencherSenha('123456');
    cadastroPage.cadastrar();
    cadastroPage.validarMensagem('O campo nome deve ser prenchido');
  });

  it('cadastro com email vazio', () => {
    cadastroPage.preencherNome('Joao da Silva');
    cadastroPage.preencherSenha('123456');
    cadastroPage.cadastrar();
    cadastroPage.validarMensagem('O campo e-mail deve ser prenchido corretamente');
  });

  it('cadastro com senha vazia', () => {
    cadastroPage.preencherNome('Joao da Silva');
    cadastroPage.preencherEmail(email);
    cadastroPage.cadastrar();
    cadastroPage.validarMensagem('O campo senha deve ter pelo menos 6 dígitos');
  });

  it('cadastro com todos os campos vazios', () => {
    cadastroPage.cadastrar();
    cadastroPage.validarMensagem('O campo nome deve ser prenchido');
  });

  it('cadastro com email inválido', () => {
    cadastroPage.preencherNome('Joao da Silva');
    cadastroPage.preencherEmail('email-invalido');
    cadastroPage.preencherSenha('123456');
    cadastroPage.cadastrar();
    cadastroPage.validarMensagem('O campo e-mail deve ser prenchido corretamente');
  });

  it('cadastro com email sem arroba', () => {
    cadastroPage.preencherNome('Joao da Silva');
    cadastroPage.preencherEmail('usuario.teste.com');
    cadastroPage.preencherSenha('123456');
    cadastroPage.cadastrar();
    cadastroPage.validarMensagem('O campo e-mail deve ser prenchido corretamente');
  });

  it('cadastro com email sem domínio', () => {
    cadastroPage.preencherNome('Joao da Silva');
    cadastroPage.preencherEmail('usuario@');
    cadastroPage.preencherSenha('123456');
    cadastroPage.cadastrar();
    cadastroPage.validarMensagem('O campo e-mail deve ser prenchido corretamente');
  });

  it('cadastro com email sem usuário', () => {
    cadastroPage.preencherNome('Joao da Silva');
    cadastroPage.preencherEmail('@teste.com');
    cadastroPage.preencherSenha('123456');
    cadastroPage.cadastrar();
    cadastroPage.validarMensagem('O campo e-mail deve ser prenchido corretamente');
  });

  it('cadastro com senha de 1 dígito', () => {
    cadastroPage.preencherNome('Joao da Silva');
    cadastroPage.preencherEmail(email);
    cadastroPage.preencherSenha('1');
    cadastroPage.cadastrar();
    cadastroPage.validarMensagem('O campo senha deve ter pelo menos 6 dígitos');
  });

  it('cadastro com senha de 5 dígitos', () => {
    cadastroPage.preencherNome('Joao da Silva');
    cadastroPage.preencherEmail(email);
    cadastroPage.preencherSenha('12345');
    cadastroPage.cadastrar();
    cadastroPage.validarMensagem('O campo senha deve ter pelo menos 6 dígitos');
  });

  it('cadastro com senha de 6 dígitos', () => {
    cadastroPage.preencherNome('Joao da Silva');
    cadastroPage.preencherEmail(email);
    cadastroPage.preencherSenha('123456');
    cadastroPage.cadastrar();
    cadastroPage.validarCadastroComSucesso();
  });

  it('cadastro com senha de 7 dígitos', () => {
    cadastroPage.preencherNome('Joao da Silva');
    cadastroPage.preencherEmail(email);
    cadastroPage.preencherSenha('1234567');
    cadastroPage.cadastrar();
    cadastroPage.validarCadastroComSucesso();
  });

  it('cadastro com senha maior que 6 dígitos', () => {
    cadastroPage.preencherNome('Joao da Silva');
    cadastroPage.preencherEmail(email);
    cadastroPage.preencherSenha('123456789');
    cadastroPage.cadastrar();
    cadastroPage.validarCadastroComSucesso();
  });

  it('cadastro com nome vazio e email inválido', () => {
    cadastroPage.preencherEmail('email-invalido');
    cadastroPage.preencherSenha('123456');
    cadastroPage.cadastrar();
    cadastroPage.validarMensagem('O campo nome deve ser prenchido');
  });

  it('cadastro com email vazio e senha inválida', () => {
    cadastroPage.preencherNome('Joao da Silva');
    cadastroPage.preencherSenha('12345');
    cadastroPage.cadastrar();
    cadastroPage.validarMensagem('O campo e-mail deve ser prenchido corretamente');
  });

  it('cadastro com email inválido e senha válida', () => {
    cadastroPage.preencherNome('Joao da Silva');
    cadastroPage.preencherEmail('email-invalido');
    cadastroPage.preencherSenha('123456');
    cadastroPage.cadastrar();
    cadastroPage.validarMensagem('O campo e-mail deve ser prenchido corretamente');
  });

  it('cadastro com email válido e senha inválida', () => {
    cadastroPage.preencherNome('Joao da Silva');
    cadastroPage.preencherEmail(email);
    cadastroPage.preencherSenha('12345');
    cadastroPage.cadastrar();
    cadastroPage.validarMensagem('O campo senha deve ter pelo menos 6 dígitos');
  });
});
