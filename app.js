'use strict';
    document.addEventListener('DOMContentLoaded', function() {


let colors = generateArrayColors(6);
const items = document.querySelectorAll('.item');
const colorDisplay = document.getElementById('color-display');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');
const menu = document.querySelector('.menu');
let pickedColor = colors[Math.floor(Math.random()* colors.length)];

colorDisplay.textContent = pickedColor;
for(let i=0; i < colors.length; i++){
    items[i].style.backgroundColor = colors[i]; 
    items[i].addEventListener('click', function(){
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            message.textContent = "correct";
            allColors(pickedColor);
        } else {
            message.textContent = "try again";
            this.style.backgroundColor = "#020202";
        }  
    });
};

resetButton.addEventListener('click', function(){
    colors = generateArrayColors(6);
    pickedColor = colors[Math.floor(Math.random()* colors.length)];
    colorDisplay.textContent = pickedColor;
    for(let i=0; i < colors.length; i++){
    items[i].style.backgroundColor = colors[i]; }
    menu.style.backgroundColor = "#4747d1";
});

function allColors(color) {
    for(let i=0; i < items.length; i++){
        items[i].style.backgroundColor = color;
    }
    menu.style.backgroundColor = color;
};
        
function generateArrayColors(num){
    let arr = [];
    for (let i=0; i<num; i++){
    let r = (Math.floor(Math.random()* 256));
    let g = (Math.floor(Math.random()* 256));
    let b = (Math.floor(Math.random()* 256));
    arr.push("rgb(" + r + ", " + g + ", " + b + ")");     
    }
    return arr;  
};

    });