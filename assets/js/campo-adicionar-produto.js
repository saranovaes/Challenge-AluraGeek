import { cadastraProdutos } from "./Controller/cadastraProdutos.js";

const botaoADM = document.querySelector('[data-botao-administrador]');
const home = document.querySelector('[data-home]');

botaoADM.addEventListener('click', () => {
    location.href = 'todos-os-produtos.html';
})
home.addEventListener('click', () => {
    location.href = 'index.html';
})

cadastraProdutos();