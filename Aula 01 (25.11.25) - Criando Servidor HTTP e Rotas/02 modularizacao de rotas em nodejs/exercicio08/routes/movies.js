export function moviesRoute(resquest, response, url) {
    const nome = url.searchParams.get('nome')

    if (!nome) {
        response.end(`Por favor, informe o nome do filme usando /movies?nome=NomeDoFilme`)
    } else {
        response.end(`Você pesquisou pelo filme: ${nome}`)
    }
}