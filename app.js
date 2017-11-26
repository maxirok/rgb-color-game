let colors = [
    "rgb(255, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(0, 0, 0)",  
];


const items = document.querySelectorAll('.item');
const colorDisplay = document.getElementById('color-display');
const message = document.getElementById('message');
const pickedColor = colors[3];

colorDisplay.textContent = pickedColor;
for(let i=0; i < colors.length; i++){
    items[i].style.backgroundColor = colors[i]; 
    items[i].addEventListener('click', function(){
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            alert('yes!');
        } else {
            alert('no ');
        }
        
    });
};