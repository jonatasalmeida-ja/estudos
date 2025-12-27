export function gameRoute(request, response) {
    const url = new URL(request.url, `http://${request.headers.host}`)
    const nome = url.searchParams.get('nome')

    if (!nome) {
        response.end('Por favor, informe o nome do game usando /game?nome=NomeDoGame')
    } else {
        response.end(`Você pesquisou pelo game: ${nome}`)
    }
}