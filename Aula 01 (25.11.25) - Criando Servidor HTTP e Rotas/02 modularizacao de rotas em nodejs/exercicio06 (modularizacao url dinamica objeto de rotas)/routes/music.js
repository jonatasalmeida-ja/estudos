export function musicRoute(request, response) {
    const url = new URL(request.url, `http://${request.headers.host}`)
    const nome = url.searchParams.get('nome')

    if (!nome) {
        response.end('Por favor, informe o nome da música usando /music?nome=NomeDaMusica')
    } else {
        response.end(`Você pesquisou pela música: ${nome}`)
    }
}