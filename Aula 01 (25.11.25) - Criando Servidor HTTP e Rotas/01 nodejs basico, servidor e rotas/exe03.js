import http from 'http'

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'})

    const url = new URL(request.url, `http://${request.headers.host}`)
    const path = url.pathname
    const nome = url.searchParams.get('nome')

    if (path === '/') {
        response.end(`Bem-vindo ao Servidor de Cursos!
Rotas disponíveis:
/data
/curso?nome=NomeDoCurso`)
        return
    }

    if (path === '/data') {
        response.end(`A data de hoje é ${new Date()}`)
        return
    }

    if (path === '/curso'){
        if (!nome) {
            response.end(`Por favor, informe o nome do curso usando /curso?nome=NomeDoCurso`)
        } else {
            response.end(`Você pesquisou pelo curso: ${nome}`)
        }
        return
    }

    response.end('Página não encontrada')
})

server.listen(3000, () => {
    console.log('Server is running...')
})