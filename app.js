'use strict';
    document.addEventListener('DOMContentLoaded', function() {

/* ### variables ### */

let inputNum = document.querySelector('.guess-n');
const messageDispay = document.querySelector('#message');
const btnReset = document.querySelector('#reset');
const btnEnter = document.getElementById('enter');
let numberGuess = '' ;

/* ### functions ### */

function validateNumber (){
    let number = parseInt(inputNum.value);
    alert(number);
    return number;
};

function randomColor(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return "rgb(" + r + ", " + g + ", " + b +")";
}

function generateColors(numberColors){
    let arrayColors = [];
    for (let i=0; i<inputNum; i++){
        arrayColors.push(randomColor());
    }
    return arrayColors;
};



/* ### addListeners ### */

btnEnter.addEventListener('click', function(){
    validateNumber();
    

});
    
btnReset.addEventListener('click', function(){
    

})
    
    });