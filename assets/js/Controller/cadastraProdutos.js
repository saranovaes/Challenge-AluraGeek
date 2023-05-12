import {Cliente} from "../Service/service.js";

const botaoFormulario = document.querySelector('[data-formulario]');
const imagem = document.querySelector('[data-url]');
const categoria = document.querySelector('[data-categoria]');
const preco = document.querySelector('[data-preco]');
const descricao = document.querySelector('[data-descricao]');
const nomeProduto = document.querySelector('[data-nome]');

export function cadastraProdutos() {
    botaoFormulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        Cliente.criarProduto(imagem.value, nomeProduto.value, preco.value, descricao.value, categoria.value).then(() => {
            location.href = 'todos-os-produtos.html'
        })
    })

    const args = {
        negativeSignAfter: false,
        prefix: 'R$',
        fixed: true,
        fractionDigits: 2,
        decimalSeparator: ',',
        thousandsSeparator: '.',
        currency: 'BRL',
        cursor: 'end'
      };

      const input = SimpleMaskMoney.setMask('[data-preco]', args);
    
      input.formatToNumber();
    
}