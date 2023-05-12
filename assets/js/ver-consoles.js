import { Cliente } from "./Service/service.js";

const home = document.querySelector('[data-home]');
const Consoles = document.querySelector('[data-lista-consoles]');

home.addEventListener('click', () => {
    location.href = 'index.html';
})

const lista = (imagem, nome, preco, nomeLista, id, descricao) => {
    const elemento = document.createElement('div');

    const conteudo = `
            <a class="produtos__conteudo__link" href="#">
                <img class="produtos__conteudo__imagem produto__imagem__base" src="${imagem}" alt="Imagem de um produto da lista ${nomeLista}">
                <p class="produtos__texto">${nome}</p>
                <p class="produtos__preco">${preco}</p>
                <p class="produtos__descricao">${descricao}</p>
            </a>
        `

    elemento.innerHTML = conteudo;
    elemento.dataset.id = id;

    return elemento
}

Cliente.listaConsoles().then(response => {
    response.forEach(data => {
        Consoles.appendChild(lista(data.imagem, data.nome, data.preco, data.categoria, data.id, data.descricao))
    })
})