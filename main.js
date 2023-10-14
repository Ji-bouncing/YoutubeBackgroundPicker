
/* calling the event listeners*/
document.querySelector('#blue').addEventListener('click',changeToBlue)

document.querySelector('#lemon').addEventListener('click',changeToLime)

document.querySelector('#purple').addEventListener('click',changeToPurple)

document.querySelector('#red').addEventListener('click',changeToRed)

document.querySelector('#green').addEventListener('click',changeToGreen)

document.querySelector('#orange').addEventListener('click',changeToOrange)

document.querySelector('#brown').addEventListener('click',changeToBrown)
document.querySelector('#resetBackground').addEventListener('click',resetBackground)

/* function of the event listenes*/

function changeToBlue(){
  document.querySelector('body').style.background = 'blue'
  document.querySelector('body').style.color = 'white'
}

function changeToLime(){
  document.querySelector('body').style.background = 'lime'
  document.querySelector('body').style.color = 'white'
}

function changeToPurple(){
  document.querySelector('body').style.background = 'purple'
  document.querySelector('body').style.color = 'white'
}

function changeToRed(){
  document.querySelector('body').style.background = 'red'
  document.querySelector('body').style.color = 'white'
}

function changeToGreen(){
  document.querySelector('body').style.background = 'green'
  document.querySelector('body').style.color = 'white'
}

function changeToOrange(){
  document.querySelector('body').style.background = 'orange'
  document.querySelector('body').style.color = 'white'
}

function changeToBrown(){
  document.querySelector('body').style.background = 'brown'
  document.querySelector('body').style.color = 'white'
}

function resetBackground(){
  document.querySelector('body').style.background = 'white'
  document.querySelector('body').style.color = 'black'
}