let i = 0;
const txt = 'Hi, I am Pietro';
const speed = 90;

function typeWriter(){
  if (i < txt.length){ /*ripeto questa funzione finche la variabile non e' uguale alla lunghezza dell'testo*/
    document.getElementById('HiIamPietro').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(typeWriter, 375);

function scrollAppear(){
  const project1 = document.querySelector('.projectOne');
  const introPosition1 = project1.getBoundingClientRect().top; //Prendiamo la distanza dall' altro del nostro elemento
  const project2 = document.querySelector('.projectTwo');
  const introPosition2 = project2.getBoundingClientRect().top;
  const screenPosition = window.innerHeight - 300; //Salviamo l'altezza della pagina in pixel

  if(introPosition1 < screenPosition){
    project1.classList.add('projectOneVisible')//Aggiungiamo una classe
  }
  if(introPosition2 < screenPosition){
    project2.classList.add('projectTwoVisible')//Aggiungiamo una classe
  }
}

window.addEventListener('scroll', scrollAppear)
