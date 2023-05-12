const listaStarwars = () => {
    return fetch('https://jef035.pythonanywhere.com/Starwars')
    .then(resposta => resposta.json())
}

const listaConsoles = () => {
    return fetch('https://jef035.pythonanywhere.com/Consoles')
    .then(resposta => resposta.json())
}

const listaDiversos = () => {
    return fetch('https://jef035.pythonanywhere.com/Diversos')
    .then(resposta => resposta.json())
}


const removeLista = (id, categoria) => {
    return fetch(`https://jef035.pythonanywhere.com/${categoria}/${id}`, {
        method: 'DELETE'
    })
}

const editarProduto = (nome, preco, categoria, imagem, id, descricao) => {
    return fetch(`https://jef035.pythonanywhere.com/${categoria}/${id}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem,
            categoria: categoria,
            descricao: descricao
        })
    })
    .then( resposta => {
        return resposta.json()
    })
}

const criarProduto = (imagem, nome, preco, descricao, categoria) => {
    return fetch(`https://jef035.pythonanywhere.com/${categoria}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            imagem: imagem,
            nome: nome,
            preco: preco,
            descricao: descricao,
            categoria: categoria
        })
    })
    .then(resposta => {
        return resposta.body
    })
}

export const Cliente = {
    listaStarwars,
    listaConsoles,
    listaDiversos,
    removeLista,
    editarProduto,
    criarProduto
}