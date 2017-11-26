'use strict';
    document.addEventListener('DOMContentLoaded', function() {


let colors = generateArrayColors(6);


const items = document.querySelectorAll('.item');
const colorDisplay = document.getElementById('color-display');
const message = document.getElementById('message');
const pickedColor = colors[Math.floor(Math.random()* colors.length)];

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

function allColors(color) {
    for(let i=0; i < items.length; i++){
        items[i].style.backgroundColor = color;
    }
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

