import http from 'http'

const server = http.createServer((request, response) => {
    const method = request.method

    response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'})

    if (method === 'GET') {
        response.end('Você usou GET')
        return
    }

    if (method === 'POST') {
        response.end('Você usou POST')
        return
    }

    response.end('Método não encontrado')
})

server.listen(3000, () => {
    console.log('Server is running...')
})