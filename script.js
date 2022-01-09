// Search Bar
const search = document.querySelector('.search'); 
const input = document.querySelector('.input');
const btn = document.querySelector('.btn'); 

btn.addEventListener('click', () =>{
    search.classList.toggle('active'); 
    input.focus(); 
})

//Bubbles

const bubble1 = document.querySelector('.blue-bubble');
const bubble2 = document.querySelector('.yellow-bubble');
const bubble3 = document.querySelector('.red-bubble');
const bubble4 = document.querySelector('.green-bubble');

const colors = [
    ['blue', 1],
    [ 'green', 2],
    [ 'yellow', 3],
    [ 'red' , 4]
]

function randomNumber() { 
    return Math.round(Math.random() * (4 - 1) + 1);
} 

function randomizeColor(){
let number = randomNumber(); 
let color = ''; 
for(i=0; i < colors.length; i++){
    if(colors[i][1] === number){
        color = colors[i][0]
    }
}
return color; 
}
bubble1.addEventListener('animationiteration', () =>{
   let color = randomizeColor(); 
   bubble1.style.backgroundColor = color; 
})

bubble2.addEventListener('animationiteration', () =>{
    let color = randomizeColor(); 
    bubble2.style.backgroundColor = color; 
 })

 bubble3.addEventListener('animationiteration', () =>{
    let color = randomizeColor(); 
    bubble3.style.backgroundColor = color; 
 })

 bubble4.addEventListener('animationiteration', () =>{
    let color = randomizeColor(); 
    bubble4.style.backgroundColor = color; 
 })