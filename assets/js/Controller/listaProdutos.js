import {Cliente} from "../Service/service.js";

const produtosCompleto = document.querySelector('[data-produtos-completo]');

const lista = (imagem, nome, preco, nomeLista, id, descricao) => {
    const elemento = document.createElement('div');

    const conteudo = `
            <div class="produtos__completo__imagem__container produtos__conteudo__link">
                <img class="produtos__completo__imagem produto__imagem__base" src="${imagem}" alt="Imagem de um produto da lista ${nomeLista}">
                <div class="produto__icon__container">
                    <img class="produto__completo__icon produto__completo__icon--deletar" src="./assets/img/trash.svg" data-deletar>
                    <img class="produto__completo__icon produto__completo__icon--editar" src="./assets/img/pencil-square.svg" data-editar>
                </div>
                <p class="produtos__texto">${nome}</p>
                <p class="produtos__preco">${preco}</p>
                <p class="produtos__descricao">${descricao}</p>
            </div>
        `

    elemento.innerHTML = conteudo;
    elemento.dataset.id = id;
    elemento.dataset.categoria = nomeLista;

    return elemento
}

export function listaDeProdutos() {
    Cliente.listaStarwars().then(resposta => {
        resposta.forEach(data => {
            produtosCompleto.appendChild(lista(data.imagem, data.nome, data.preco, data.categoria, data.id, data.descricao))
        })
    })

    Cliente.listaConsoles().then(response => {
        response.forEach(data => {
            produtosCompleto.appendChild(lista(data.imagem, data.nome, data.preco, data.categoria, data.id, data.descricao))
        })
    })

    Cliente.listaDiversos().then(response => {
        response.forEach(data => {
            produtosCompleto.appendChild(lista(data.imagem, data.nome, data.preco, data.categoria, data.id, data.descricao))
        })
    })


    produtosCompleto.addEventListener('click', (evento) => {
        if (evento.target.classList[1] == 'produto__completo__icon--deletar') {
            evento.preventDefault()
            const divPrincipal = evento.target.closest('[data-id]');
            let id = divPrincipal.dataset.id;
            let categoria = divPrincipal.dataset.categoria;
            
            Cliente.removeLista(id, categoria).then(() => {
                divPrincipal.remove()
            })
        }
    })

    produtosCompleto.addEventListener('click', (evento) => {
        if (evento.target.classList[1] == 'produto__completo__icon--editar') {
            evento.preventDefault()
            const divPrincipal = evento.target.closest('[data-id]');

            let id = divPrincipal.dataset.id;
            let categoria = divPrincipal.dataset.categoria;

            location.href = `campo-editar-produtos.html?categoria=${categoria}&id=${id}`;
        }
    })
}