const body=document.querySelector('body');
const button=document.querySelector('button');
const colors=['violet','green','red','pink','yellow','orange','black','skyblue'];

body.style.backgroundColor='violet';

button.addEventListener('click',function(){
    const colorIndex=Math.floor(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorIndex];
})
