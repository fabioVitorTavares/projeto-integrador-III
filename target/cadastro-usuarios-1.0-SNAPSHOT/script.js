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
  window.alert(`Novo usuário ${obj.nome} cadastrado com sucesso!`)
}