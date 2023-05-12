import { produtosHome } from './Controller/produtosHome.js';

const login = document.querySelector('[data-login]');
const home = document.querySelector('[data-home]');
const formularioFooter = document.querySelector('[data-formulario-footer]');
const verConsoles = document.querySelector('[data-ver-consoles]');

verConsoles.addEventListener('click', () => {
    location.href = 'ver-consoles.html';
})

login.addEventListener('click', () => {
    return location.href = 'login.html';
})

home.addEventListener('click', () => {
    location.href = 'index.html';
})

produtosHome();
