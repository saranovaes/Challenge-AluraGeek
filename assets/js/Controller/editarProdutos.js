import { Cliente } from "../Service/service.js";

const botaoFormulario = document.querySelector('.formulario__produto');
const imagem = document.querySelector('[data-url]');
const nomeProduto = document.querySelector('[data-nome-produto]');
const preco = document.querySelector('[data-preco]');
const descricao = document.querySelector('[data-descricao]');

const pageUrl = new URL(window.location);

let id = pageUrl.searchParams.get('id');
let categoria = pageUrl.searchParams.get('categoria');


export function editaProduto () {
    botaoFormulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
    
        Cliente.editarProduto(nomeProduto.value, preco.value, categoria, imagem.value, id, descricao.value)
        .then(() => {
            location.href = 'todos-os-produtos.html'
        }).catch(() => {
            alert('Não foi possivel alterar o produtos')
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