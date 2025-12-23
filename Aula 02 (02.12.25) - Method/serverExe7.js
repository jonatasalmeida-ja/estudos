import http from 'http'

const routes = {
    '/clientes': {
        GET: function (req, res) {
            res.end('Listando clientes')
        },
        POST: function (req, res) {
            res.end('Criando cliente')
        }
    },
    '/relatorios': {
        GET: function (req, res) {
            res.end('Gerando relatório')
        },
        POST: function (req, res) {
            res.end('Criando relatório')
        }
    }
}

const server = http.createServer((req, res) => {
    const method = req.method
    const url = new URL(req.url, `http:${req.headers.host}`)
    const path = url.pathname

    res.writeHead(200, {
        'Content-Type':'text/plain; charset=utf-8'
    })

    const route = routes[path]

    if (!route) {
        res.end('Página não encontrada')
        return
    }

    const handler = route[method]

    if (!handler) {
        res.end('Método não permitido')
        return
    }

    handler(req, res)
})

server.listen(3000, () => {
    console.log('Server is running...')
})