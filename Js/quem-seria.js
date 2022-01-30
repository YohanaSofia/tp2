/* Personagens:
   Richard Webber: Você é uma pessoa amigavel, madura, além de saber ressaltar o que há de bom nos outros, 
   além de ser um líder nato e mesmo assim isso não te impede de ter suas próprias complicaçõs na vida.
   Meredith Grey:Você é uma pessoa reservada, não teme a nada, faz barreiras pra não se machucar e já sofreu algum tipo de abandono, mas sempre está do lado de quem você ama quando precisam.
   Derek Sheperd: você é uma pessoa que conquista as pessoas com seu carisma, sendo admirado por todos 
   e visto como a estrela do hospital, claro que aproveita essa atenção.   
   Cristina Yang: É sarcástica, competitiva,fria, calculista, sonhadora, arrogante e a melhor em tudo que faz, 
   mas tem coração mole com suas pessoas proximas a si, além de ser  uma ótima amiga..
   Jackson Avery: É conhecido como uma pessoa privilegiada e atraente. Além disso, tem dificuldades em assumir que está errado, 
    apesar disso é um bom profissional, e sabe lidar com responsabilidades e decisões difícieis. 
   Owen Hunt: Você carrega o mundo nas suas costas e tem dificuldade de lidar com suas cicatrizes. Quando ama,
   o faz intensamente, quando não ama é um lobo solitário. Além disso, é um ótimo profissional, entende suas 
   responsabilidades, sabe aconselhar e compreender seus colegas. 
   Callie Torres: Você é ousada, inteligente e pronta para manejar os desafios impostos pelas limitações da medicina,
   sabe se divertir e luta pelos seus sonhos.
   Arizona Robbins:  Você é uma pessoa de forte expressão emocional. As vezes você duvida de si mesma por causa da auto
   crítica. Enquanto Robbins usa tênis de rodinha para mostrar autenticidade e irreverência, você também tem sua marca
   para mostrar sua própria singularidade no mundo.
   Miranda Bailey: É uma pessoa que impõe respeito, determinada, exigente e a melhor no que faz. Você é 
   uma pessoa que duela com a vunerabilidade e a força, expressa na sua sensibilidade aliado ao espírito de liderança
   Alex Karev: É conhecido como alguém  incrivelmente arrogante e imaturo, mas no fundo isso é uma forma de se proteger e não ser magoado novamente.
   Mesmo assim você se preocupa com tudo e precisa de um tempo para  aprender a demonstrar que se preocupava com as pessoas que gosta.
*/

let contador = 0;
let pessoa;
let p;


//Pegar de id de todos as respostas da pergunta 1
let inputDeterminada = document.querySelectorAll('#determinada');
let inputOrgulhosa = document.querySelectorAll('#orgulhosa');
let inputImatura = document.querySelectorAll('#imatura');
let inputExtrovertida = document.querySelectorAll('#extrovertida');
let inputEmocionada = document.querySelectorAll('#emocionada');
let inputIndecisa = document.querySelectorAll('#indecisa');
let inputFocada = document.querySelectorAll('#focada');
let inputIgnorante = document.querySelectorAll('#ignorante');


//Pergar id de todos as respostas da pergunta 2
let inputCardio= document.querySelectorAll('#Cardio');
let inputPediatricia = document.querySelectorAll('#Pediatria');
let inputNeuro= document.querySelectorAll('#Neuro');
let inputTrauma = document.querySelectorAll('#Trauma');
let inputOrtopedia = document.querySelectorAll('#orto');
let inputPlastica = document.querySelectorAll('#Plastica');
let inputObstetricia = document.querySelectorAll('#Obstetricia');
let inputGeral = document.querySelectorAll('#Geral');


//Pergar id de todos as respostas da pergunta 3
let inputSim = document.querySelectorAll('#Nao');
let inputNao = document.querySelectorAll('#Sim');

//Pergar id de todos as respostas da pergunta 4
let inputCoracao= document.querySelectorAll('#coracao');
let inputOsso = document.querySelectorAll('#osso');
let inputImplantar  = document.querySelectorAll('#implantar');
let inputCerebro= document.querySelectorAll('#cerebro');
let inputEmergencia = document.querySelectorAll('#emergencia');

//Pergar id de todos as respostas da pergunta 5
let inputPessima = document.querySelectorAll('#pessima');
let inputMediana = document.querySelectorAll('#mediana');
let inputBoa  = document.querySelectorAll('#boa');

//Pergar id de todos as respostas da pergunta 6
let inputNaoSabeLidar = document.querySelectorAll('#N-lidar');
let inputLidaBem = document.querySelectorAll('#lidabem');

// Pegar id da resposta 7
let inputBailey = document.querySelectorAll('#Bailey');

//button de enviar resposta
let buttonEnviarEl = document.querySelector('#enviar');
let sectionPerguntasEl = document.querySelector('#perguntas');
let mainQuizEl = document.querySelector('.Quiz');

//Funções 
function principal(){
    Bailey();
    Yang();
    Drek();
    Grey();
    criarDiv(p);
}

function Grey(){
    if(inputIgnorante.checked == true){
        contador++;
    }
    if(inputGeral.checked == true){
        contador++;
    }
    if(inputImplantar.checked == true){
        contador++;
    }
    if(inputMediana.checked == true){
        contador++;
    }
    if(inputSim.checked == true){
        contador++;
    }
    if( contador >= 4){
     pessoa = "Meredith Grey";
     p = "Você é uma pessoa reservada, não teme a nada, faz barreiras pra não se machucar e já sofreu algum tipo de abandono, mas sempre está do lado de quem você ama quando precisam.";
    }
}





function Drek(){
    if(inputOrgulhosa.checked == true){
        contador++;
    }
    if(inputNeuro.checked == true){
        contador++;
    }
    if(inputCerebro.checked == true){
        contador++;
    }
    if(inputMediana.checked == true){
        contador++;
    }
    if(inputSim.checked == true){
        contador++;
    }
    if( contador >= 4){
     pessoa = "Derek Sheperd";
     p = "você é uma pessoa que conquista as pessoas com seu carisma, sendo admirado por todos e visto como a estrela do hospital, claro que aproveita essa atenção. ";
    }
}

function Yang(){
    if(inputOrgulhosa.checked == true){
        contador++;
    }
    if(inputCardio.checked == true){
        contador++;
    }
    if(inputNao.checked == true){
        contador++;
    }
    if(inputPessima.checked == true){
        contador++;
    }
    if(inputCoracao.checked == true){
        contador++;
    }
    if( contador >= 4){
     pessoa = "Cristina Yang";
     p = "É sarcástica, competitiva,fria, calculista, sonhadora, arrogante e a melhor em tudo que faz,  mas tem coração mole com suas pessoas proximas a si, além de ser  uma ótima amiga.";
    }
}



function Bailey(){
    if(inputDeterminada.checked == true){
        contador++;
    }
    if(inputGeral.checked == true){
        contador++;
    }
    if(inputEmergencia.checked == true){
        contador++;
    }
    if(inputBoa.checked == true){
        contador++;
    }
    if(inputLidaBem.checked == true){
        contador++;
    }
    if(inputBailey.checked == true){
        contador++;
    }
    alert(contador);
    if( contador >= 4){
     pessoa = "Miranda Bailey";
     p = "É uma pessoa que impõe respeito, determinada, exigente e a melhor no que faz. Você é uma pessoa que duela com a vunerabilidade e a força, expressa na sua sensibilidade aliado ao espírito de liderança";
    }
}
function criarDiv(){
    navigator.vibrate([500]);
    window.scrollTo(0, 0);
    let divAlert = document.createElement('div');
    let hrDiv = document.createElement('hr');
    let pAlert = document.createElement('p');
    let h1Alert = document.createElement('h1');
    divAlert.classList.add('alertResposta');
    h1Alert.innerHTML = pessoa;
    pAlert.innerHTML = p;
    mainQuizEl.insertBefore(divAlert, sectionPerguntasEl);
    divAlert.appendChild(h1Alert);
    divAlert.appendChild(hrDiv)
    divAlert.appendChild(pAlert);
}


buttonEnviarEl.addEventListener('click', principal);