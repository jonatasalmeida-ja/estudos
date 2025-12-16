import http from 'http'

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'})

    const url = new URL(request.url, `http://${request.headers.host}`)
    const path = url.pathname
    const nome = url.searchParams.get('nome')

    if (path === '/') {
        response.end(`Bem-vindo ao Servidor de Cidades!
Rotas disponíveis:
/data
/cidade?nome=NomeDaCidade`)
        return
    }

    if (path === '/data') {
        response.end(`Hoje é ${new Date()}`)
        return
    }

    if (path === '/cidade') {
        if (!nome) {
            response.end(`Por favor, informe o nome da cidade usando /cidade?nome=NomeDaCidade`)
        } else {
            response.end(`Você pesquisou pela cidade: ${nome}`)
        }
        return
    }                                

    response.end('Página não encontrada!')
})

server.listen(3000, () => {
    console.log('Server is running...')
})


// http://localhost:3000/cidade?nome=NomeDaCidade