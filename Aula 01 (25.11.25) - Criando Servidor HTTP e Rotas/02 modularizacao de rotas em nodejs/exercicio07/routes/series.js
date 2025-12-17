export function seriesRoute(request, response, url) {
    const nome = url.searchParams.get('nome')

    if (!nome) {
        response.end('Por favor, informe o nome da série usando /series?nome=NomeDaSerie')
    } else {
        response.end(`Você pesquisou pela série: ${nome}`)
    }
}