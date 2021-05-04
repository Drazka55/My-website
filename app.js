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

typeWriter();

document.querySelector('.FastDescription').addEventListener("mouseover", mouseOver);
document.querySelector('.FastDescription').addEventListener("mouseout", mouseOut);

function mouseOver(){
  document.querySelector('#SimpleDescRow').style.width='200px';
}

function mouseOut(){
  document.querySelector('#SimpleDescRow').style.width='325px';
}
