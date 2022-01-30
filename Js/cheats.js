let bodyEl = document.querySelector('body');
let navEl = document.querySelector('nav');
let nomeEl = document.querySelector('#NomeSite')


cheet('⬆️ ⬆️ ⬇️ ⬇️ ⬅️ ➡️ ⬅️ ➡️ b a', function() {
   alert('Teste: Entrou na função');
   navigator.vibrate(500);
   bodyEl.style.backgroundColor = rgb(87, 108, 133);
   navEl.style.backgroundColor = rgb(24, 42, 65); 
   nomeEl.style.color = rgb(209, 218, 230);;
});