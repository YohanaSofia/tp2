let tituloNomeEl = document.querySelector('.titulo'); //h1 do nome do usuario da pagina de perfil
let senhaInfoEl = document.querySelector('#Senha-Info'); //input  da senha  do usuario da pagina de perfil
let emailInfoEl = document.querySelector('#Email-Info');
let imgPerfilEl = document.querySelectorAll('#perfil');
let conhecimentoEl = document.querySelector('#conhecimento');
let fraseEl = document.querySelector('#fraseS');
let aEl = document.querySelector('#link-perfil');

function mudar() {
    let nomeSalvo =  localStorage.getItem('Nome-do-usuario');
    let senhaSalvo =  localStorage.getItem('Senha-do-usuario');
    let emailSalvo =  localStorage.getItem('Email-do-usuario');
    let fraseSalvo =  localStorage.getItem('pontos-Frase');
    let conhecimentoSalvo =  localStorage.getItem('pontos-Conhecimento');
    fraseEl.value = fraseSalvo;
    conhecimentoEl.value = conhecimentoSalvo;
    tituloNomeEl.innerHTML = nomeSalvo;
    senhaInfoEl.value = senhaSalvo;
    emailInfoEl.value = emailSalvo;
   
    imgPerfilEl.src = "../Imgs/Imgs Perfil/Perfil.jpeg";
  }
 mudar();