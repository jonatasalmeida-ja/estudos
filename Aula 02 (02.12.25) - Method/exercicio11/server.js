import http from 'http'
import { routes } from './routes.js'

const server = http.createServer((req, res) => {
    const method = req.method
    const url = new URL(req.url, `http://${req.headers.host}`)
    const path = url.pathname

    res. writeHead(200, {
        'Content-type':'text/plain; charset=utf-8'
    })

    const route = routes[path]

    if (!route) {
        res.end('Página não encontrada')
        return
    }

    const handler = route[method]

    if (!handler) {
        res.end('Método não permitido')
    }

    handler(req, res)
})

server.listen(3000, () => {
    console.log('Server is running...')
})