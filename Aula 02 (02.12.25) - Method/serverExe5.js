import http from 'http'

const ordersHandlers = {
    'GET': function (req, res) {
        res.end('Listando produtos')
    },
    'POST': function (req, res) {
        res.end('Criando produto')
    }
}

const server = http.createServer((req, res) => {
    const method = req.method
    const url = new URL(req.url, `http://${req.headers.host}`)
    const path = url.pathname

    const handler = ordersHandlers[method]

    if (path === '/orders') {
        if (handler) {
            handler(req, res)
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