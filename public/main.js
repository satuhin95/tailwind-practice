var btn = document.getElementById('menu-btn')
var menu = document.getElementById('menu')
btn.addEventListener('click',()=>{
    menu.classList.toggle('hidden')
    btn.classList.toggle('open')
})