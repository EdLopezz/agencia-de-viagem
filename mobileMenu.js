const mobileMenu = document.getElementById('mobileMenu')

function toggleMenu(){
    const nav = document.getElementById('navbar')

    nav.classList.toggle('active')
}

mobileMenu.addEventListener('click' , toggleMenu)