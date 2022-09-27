const sizeUp = document.querySelector('.size-up')
const sizeDown = document.querySelector('.size-down')
const color = document.querySelector('.color')
const paragraph = document.querySelector('.paragraph')

let fontSize = 20;



function bigText() {
    fontSize += 5
    paragraph.style.fontSize = fontSize + 'px'
}


function smallText() {
    fontSize -= 5
    paragraph.style.fontSize = fontSize + 'px'
}


function changeColor() {
    
    paragraph.style.color = 'gold'
}


sizeUp.addEventListener('click', bigText)
sizeDown.addEventListener('click', smallText)
color.style.addEventListener('click', changeColor)