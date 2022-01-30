//Salvar dados do cadastro
let buttonCadastrar = document.querySelector('.button-cadastrar'); 
let inputNomeEl = document.querySelector('#formGroupExampleInput');
let inputEmailEl = document.querySelector('#formGroupExampleInput1');
let inputSenhaEl = document.querySelector('#formGroupExampleInput2');
let divPrincipalEl = document.querySelector('.div-principal');
let divCadastro = document.querySelector('.mb-3');
let buttonComecarEl = document.querySelector('#frase-button');
let login = false;

  function salvar(){
    localStorage.setItem('Nome-do-usuario', inputNomeEl.value);
    localStorage.setItem('Email-do-usuario', inputEmailEl.value);
    localStorage.setItem('Senha-do-usuario', inputSenhaEl.value);
    login = true;
    mudarDePagina()
  
  }

  function mudarDePagina(){
    if(!inputNomeEl|| !inputEmailEl.value || !inputSenhaEl.value){
        let divAlert = document.createElement('div');
        divAlert.classList.add('alert-erro');
        divAlert.innerHTML = "Usuario/Senha vazios";
        divPrincipalEl.insertBefore(divAlert, divCadastro);
       } 
       else{
       window.location.href = "Perfil.html"; 
        }
  }
function sair(){
 login = false; 
}
function validar(){
  alert('Entrou')
  if(login == "false"){
   alert('Faça login para acessar ao quiz!');
  }
  else{
    alert('foi')
  }
}
//Login
let emailInputLogin = document.querySelector('#formGroupInput').value;
let senhaInputLogin = document.querySelector('#formGroupInput2').value;
let emailDoCadastro = localStorage.getItem('Email-do-usuario');
let senhaDoCadastro = localStorage.getItem('Senha-do-usuario');
let buttonContinuar = document.querySelector('#continuar');

function logar(){
    alert('Entrou na função');
    if( emailDoCadastro === emailInputLogin || senhaInputLogin === senhaDoCadastro){
      login = true; 
      window.location.href = "Perfil.html"; 
    }else{
        let divAlert = document.createElement('div');
        divAlert.classList.add('alert-erro');
        divAlert.innerHTML = "Usuario/Senha invalidos";
        divPrincipalEl.insertBefore(divAlert, divCadastro);
       
    }
  
}

buttonContinuar.addEventListener('click', logar);
buttonCadastrar.addEventListener('click', salvar);
 
 