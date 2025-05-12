const initApp = () =>{
    const hamButton = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = () =>{
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        // So mobile menu doesn't show rest of the page
        document.body.classList.toggle('overflow-y-hidden')
    }

    hamButton.addEventListener('click',toggleMenu)
    mobileMenu.addEventListener('click',toggleMenu)
}

document.addEventListener('DOMContentLoaded',initApp) 