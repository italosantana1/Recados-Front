// Função para realizar o login
function fazerLogin(event) {
  event.preventDefault();

  // Obtém os valores dos campos do formulário
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  // Verifica se o usuário existe e as credenciais estão corretas
  if (usuario && usuario.email === email && usuario.senha === senha) {
    mostrarMensagem('Login bem-sucedido!');
  } else {
    mostrarMensagem('E-mail ou senha incorretos!');
  }

  // Limpa os campos do formulário
  document.getElementById('email').value = '';
  document.getElementById('senha').value = '';
}

// Função para exibir uma mensagem na tela
function mostrarMensagem(mensagem) {
  const mensagemElement = document.getElementById('mensagem');
  mensagemElement.textContent = mensagem;
}

// Event listener para o evento submit do formulário
document.getElementById('login-form').addEventListener('submit', fazerLogin);





// Objeto para armazenar os dados do usuário
let usuario = null;

// Função para criar um novo usuário
function criarUsuario(event) {
  event.preventDefault();

  // Obtém os valores dos campos do formulário
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmar-senha').value;

  // Verifica se já existe um usuário com o mesmo e-mail
  if (usuario && usuario.email === email) {
    mostrarMensagem('E-mail já cadastrado!');
    return;
  }

  // Verifica se as senhas digitadas coincidem
  if (senha !== confirmarSenha) {
    mostrarMensagem('As senhas não coincidem!');
    return;
  }

  // Cria um novo objeto de usuário
  const novoUsuario = {
    id: new Date().getTime(), // Identificador único
    nome,
    email,
    senha
  };

  // Armazena o novo usuário no objeto
  usuario = novoUsuario;

  // Limpa os campos do formulário
  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';
  document.getElementById('senha').value = '';
  document.getElementById('confirmar-senha').value = '';

  mostrarMensagem('Usuário cadastrado com sucesso!');
}

// Função para exibir uma mensagem na tela
function mostrarMensagem(mensagem) {
  const mensagemElement = document.getElementById('mensagem');
  mensagemElement.textContent = mensagem;
}

// Event listener para o evento submit do formulário
document.getElementById('cadastro-form').addEventListener('submit', criarUsuario);





// Array para armazenar os recados
let recados = [];

// Função para criar um novo recado
function criarRecado(event) {
  event.preventDefault();

  // Obtém os valores dos campos do formulário
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  // Cria um objeto de recado com um identificador único
  const recado = {
    id: recados.length + 1, // Identificador único
    title,
    content
  };

  // Adiciona o recado ao array
  recados.push(recado);

  // Limpa os campos do formulário
  document.getElementById('title').value = '';
  document.getElementById('content').value = '';

  // Renderiza os recados na página
  renderizarRecados();
}

// Função para renderizar os recados na página
function renderizarRecados() {
  const recadosContainer = document.getElementById('recados-container');
  recadosContainer.innerHTML = '';

  // Percorre o array de recados e cria elementos HTML para cada um
  recados.forEach((recado) => {
    const recadoElement = document.createElement('div');
    recadoElement.classList.add('recado');

    const idElement = document.createElement('span');
    idElement.classList.add('recado-id');
    idElement.textContent = `ID: ${recado.id}`;

    const titleElement = document.createElement('h3');
    titleElement.textContent = recado.title;

    const contentElement = document.createElement('p');
    contentElement.textContent = recado.content;

    // Adiciona o identificador único como atributo data-id
    recadoElement.setAttribute('data-id', recado.id);

    recadoElement.appendChild(idElement);
    recadoElement.appendChild(titleElement);
    recadoElement.appendChild(contentElement);

    recadosContainer.appendChild(recadoElement);
  });
}

// Event listener para o evento submit do formulário
document.getElementById('create-form').addEventListener('submit', criarRecado);

// Inicializa a renderização dos recados na página
renderizarRecados();
