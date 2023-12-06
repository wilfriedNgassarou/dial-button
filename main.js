
const button = document.querySelector('.btn');
const container = document.querySelector('.container');
const cursor = document.querySelector('.cursor');
const buttonCursor = document.querySelector('.btn-cursor') ;
const specialDiv = document.querySelector('[data-index="3"]') ;
// specialDiv est la div parente qui contient le svg qui aura une couleur rouge quand elle est active.

button.addEventListener('click', function(e){
  
  resetColor()

  container.classList.toggle('open');
  button.style.transform = "rotate(0deg)"
})

cursor.addEventListener('click', function(e){
  if(!e.target.closest('svg')) return ;

  const div = e.target.closest('.item');  
  const index = +e.target.closest('.item').dataset.index ;
  
  resetColor()

  if (index == 3) {
    div.classList.add('red') ;
    buttonCursor.classList.add('btn-cursor-red')
    
  } else {
    div.classList.add('active') ;
  }

  button.style.transform = `rotate(${index * 60}deg)` ;
})

/**
 * Permet de retirer la couleur rouge du curseur et du svg spécifique
 */
function resetColor() {
  const currentActive = document.querySelector('.active') ;
  
  currentActive == null ? 0 : currentActive.classList.remove('active') ;
  specialDiv.classList.remove('red');
  buttonCursor.classList.remove('btn-cursor-red') ;
}