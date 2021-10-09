import './sass/main.scss';
import menuCards from './menu.json';
import menuItems from './templates/menu-items.hbs';

const menuList = document.querySelector('.js-menu');
menuList.insertAdjacentHTML('beforeend', createMenuCards(menuCards));
function createMenuCards(menuCards){
    return menuItems(menuCards);
    document.body.classList.add(localStorage.getItem('Theme')??Theme.LIGHT);
    buttonSwitch.checked = localStorage.getItem('Theme')===Theme.DARK;
}
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const buttonSwitch = document.querySelector('#theme-switch-toggle');
buttonSwitch.addEventListener('change', switchTheme);

function switchTheme({target:{checked}}){
    checked ? toggleTheme(Theme.DARK, Theme.LIGHT): toggleTheme(Theme.LIGHT, Theme.DARK);
}
function toggleTheme(add, rem){
    document.body.classList.add(add);
    document.body.classList.remove(rem);
    localStorage.setItem('Theme', add);

}
