export function booksRoute(request, response, url) {
    const nome = url.searchParams.get('nome')

    if (!nome) {
        response.end(`Por favor, informe o título do livro usando /books?titulo=TituloDoLivro`)
    } else {
        response.end(`Você pesquisou pelo livro: ${nome}`)
    }
}