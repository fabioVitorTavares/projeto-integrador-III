function limpar() {
  const inputs = document.getElementsByClassName("input");
  for (const input of inputs) {
    input.value = ''
  }
}


function cadastrar() {
  const inputs = document.getElementsByClassName("input");
  const obj = {};
  for (const input of inputs) {
    const key = input.getAttribute('name');
    const value = input.value;    
    obj[key] = value;
  }

  if (Object.keys(obj).some(k => obj[k] === '')) {
    window.alert(`Preencha todos o campos para concluir o cadastro`)
    return
  }

  limpar();
  saveCpf(obj.cpf);
  window.localStorage.setItem(obj.cpf, JSON.stringify(obj));
  window.alert(`Novo usuário ${obj.nome} cadastrado com sucesso!`)
}

function saveCpf(cpf) {
  const cpfs = JSON.parse(window.localStorage.getItem("cpfs"));
  if (cpfs) {
    cpfs.push(cpf);
    window.localStorage.setItem("cpfs", JSON.stringify(cpfs));
  } else {
    window.localStorage.setItem("cpfs", JSON.stringify([cpf]));    
  }
}

function goCadastro() {
  window.location = "/cadastro.html"
}

function goMeuCadastro() {
  window.location = "/meu-cadastro.html"
}

function goCadastros() {
  window.location = "/cadastros.html"
}

function pesquisarCadastro() {
  const cpf = document.getElementById("input-cpf-busca").value;
  const obj = JSON.parse(window.localStorage.getItem(cpf))
  
  if (obj) {
    const container = document.getElementById("dados-cadastro");

    for (const atr in obj) {
      const strong = document.createElement("strong");
      const titulo = document.createElement("span");
      titulo.innerText = `${atr.toLocaleUpperCase()}:`;
      const valor = document.createElement("span");
      valor.innerText = ` ${obj[atr]}`;
      const div = document.createElement("div");

      strong.appendChild(titulo);
      div.appendChild(strong);
      div.appendChild(valor);
      container.appendChild(div);
    }
  } else {
    window.alert(`Cadastro com cpf: ${cpf} não encontrado!`)
  }
}