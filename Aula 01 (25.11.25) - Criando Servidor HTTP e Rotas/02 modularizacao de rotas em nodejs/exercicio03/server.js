import http from 'http'
import { statusRoute, helpRoute, notFoundRoute } from './routes/index.js'

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'})

    const routes = {
        '/help': helpRoute,
        '/status': statusRoute
    }

    const route = routes[request.url]

    if (route) {
        route(response)
    } else {
        notFoundRoute(response)
    }
})

server.listen(3000, () => {
    console.log('Server is running...')
})