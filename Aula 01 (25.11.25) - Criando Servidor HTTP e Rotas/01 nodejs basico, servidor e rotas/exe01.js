import http from 'http'

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'})

    const url = new URL(request.url, `http://${request.headers.host}`)
    const path = url.pathname
    const nomeDaCor = url.searchParams.get('nomeDaCor')

    if (path === '/') {
        response.end(`Bem-vindo ao Servidor de Cores!
Rotas disponíveis:
/data
/cor?nome=NomeDaCor`)
        return
    }

    if (path === '/data') {
        response.end(`Hoje é ${new Date()}`)
        return
    }

    if (path === '/cor') {
        if (!nomeDaCor) {
            response.end('Por favor, informe a cor usando /cor?nomeDaCor=nome')
        } else {
            response.end(`Você escolheu a cor: ${nomeDaCor}`)
        }
        return
    }

    response.end('Página não encontrada')
})

server.listen(3000, () => {
    console.log('Server is running...')
})