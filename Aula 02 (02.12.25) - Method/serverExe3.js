import http from 'http'

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type':'text/plain; charset=utf-8'
    })

    const method = req.method
    const url = new URL(req.url, `http://${req.headers.host}`)
    const path = url.pathname

    if (path === '/products') {
        if (method === 'GET') {
            res.end('Listando Produtos')
            return
        }

        if (method === 'POST') {
            res.end('Criando Produto')
            return
        }

        res.end('Método não permitido')
        return
    }

    res.end('Rota não encontrada')
})

server.listen(3000, () => {
    console.log('Server is running...')
})