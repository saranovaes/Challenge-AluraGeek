import { editaProduto } from "./Controller/editarProdutos.js";

const home = document.querySelector('[data-home]');

home.addEventListener('click', () => {
    location.href = 'index.html';
})

editaProduto();