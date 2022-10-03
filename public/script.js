var btn = document.getElementById('menu-btn');
var menu = document.getElementById('menu');

btn.addEventListener('click',()=>{
    btn.classList.toggle('open')
    menu.classList.toggle('hidden')
})