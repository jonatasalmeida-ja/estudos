import http from 'http'
import {
    homeRoute,
    moviesRoute,
    notFoundRoute
} from './routes/index.js'

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'})

    const url = new URL(request.url, `http://${request.headers.host}`)
    const path = url.pathname

    const routes = {
        '/': homeRoute,
        '/movies': moviesRoute
    }

    const route = routes[path]

    if (route) {
        route(request, response, url)
    } else {
        notFoundRoute(request, response)
    }
})

server.listen(3000, () => {
    console.log('Server is running...')
})