var i = 0;
var txt = 'Hi, I am Pietro';
var speed = 90;

function typeWriter(){
  if (i < txt.length){ /*ripeto questa funzione finche la variabile non e' uguale alla lunghezza dell'testo*/
    document.getElementById('HiIamPietro').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(typeWriter, 375);
