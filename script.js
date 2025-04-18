const menuButton = document.getElementById('menu-button');
const sideMenu = document.getElementById('side-menu');

menuButton.addEventListener('click', () => {
    if (sideMenu.classList.contains('hidden')) {
        sideMenu.classList.remove('hidden');
        sideMenu.classList.add('visible');
    } else {
        sideMenu.classList.remove('visible');
        sideMenu.classList.add('hidden');
    }
});