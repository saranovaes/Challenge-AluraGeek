import {Cliente} from "../Service/service.js";

const starWars = document.querySelector('[data-lista-starwars]');
const consoles = document.querySelector('[data-lista-consoles]');
const diversos = document.querySelector('[data-lista-diversos]');

const lista = (imagem, nome, preco, nomeLista, id) => {
    const elemento = document.createElement('div');

    const conteudo = `
            <a class="produtos__conteudo__link" href="#">
                <img class="produtos__conteudo__imagem produto__imagem__base" src="${imagem}" alt="Imagem de um produto da lista ${nomeLista}">
                <p class="produtos__texto">${nome}</p>
                <p class="produtos__preco">${preco}</p>
                <p class="links__azul">Ver produto</p>
            </a>
        `

    elemento.innerHTML = conteudo;
    elemento.dataset.id = id;

    return elemento
}

export function produtosHome() {

    Cliente.listaStarwars().then(response => {
        response.forEach(data => {
            starWars.appendChild(lista(data.imagem, data.nome, data.preco, data.categoria, data.id))
        })
    })

    Cliente.listaConsoles().then(response => {
        response.forEach(data => {
            consoles.appendChild(lista(data.imagem, data.nome, data.preco, data.categoria, data.id))
        })
    })

    Cliente.listaDiversos().then(response => {
        response.forEach(data => {
            diversos.appendChild(lista(data.imagem, data.nome, data.preco, data.categoria, data.id))
        })
    })
}

export const listaConsoles = {
    lista
}
