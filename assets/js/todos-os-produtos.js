import { listaDeProdutos } from "./Controller/listaProdutos.js"

const botao = document.querySelector('[data-adicionar-produto]');
const home = document.querySelector('[data-home]');



botao.addEventListener('click', ()=> {
    location.href = 'campo-adicionar-produto.html'
})

home.addEventListener('click', () => {
    location.href = 'index.html';
})


listaDeProdutos()


