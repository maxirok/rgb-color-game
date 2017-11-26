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
