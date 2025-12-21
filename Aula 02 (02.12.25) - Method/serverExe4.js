import http from 'http'

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type':'text/plain; charset=utf-8'
    })

    const method = req.method
    const url = new URL(req.url, `http://${req.headers.host}`)
    const path = url.pathname

    const productHandlers = {
        'GET': function (req, res) {
            res.end('Listando produtos')
        },
        'POST': function (req, res) {
            res.end('Criando produto')
        }
    }

    const products = productHandlers[method]

    if (path === '/products') {
        if (products) {
            products(req, res)
        } else {
            res.end('Método não permitido')
        }
        return
    }

    res.end('Rota não encontrada')
})

server.listen(3000, () => {
    console.log('Server is running...')
})