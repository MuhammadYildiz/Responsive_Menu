const toggel = document.querySelector('.toggel');
const menu = document.querySelector('.menu');
const bars = document.querySelector('.fa-bars');

toggel.addEventListener('click',()=>{
    menu.classList.toggle('active')
    bars.classList.toggle('fa-xmark')
})