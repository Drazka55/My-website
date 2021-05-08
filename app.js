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
  const project2 = document.querySelector('.projectTwo');
  const project3 = document.querySelector('.projectThree');
  const introPosition1 = project1.getBoundingClientRect().top; //Prendiamo la distanza dall' altro del nostro elemento
  const introPosition2 = project2.getBoundingClientRect().top;
  const introPosition3 = project3.getBoundingClientRect().top;
  const screenPosition = window.innerHeight - 300; //Salviamo l'altezza della pagina in pixel

  if(introPosition1 < screenPosition){
    project1.classList.add('projectOneVisible')//Aggiungiamo una classe
  }
  if(introPosition2 < screenPosition){
    project2.classList.add('projectTwoVisible')
  }
  if(introPosition3 < screenPosition){
    project3.classList.add('projectThreeVisible')
  }
}

window.addEventListener('scroll', scrollAppear)
