import http from 'http'
import { homeRoute, coursesRoute, scheduleRoute, teachersRoute, notFoundRoute } from './routes/index.js'

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'})

    if (request.url === '/') {
        homeRoute(response)
        return
    }

    if (request.url === '/courses') {
        coursesRoute(response)
        return
    }

    if (request.url === '/schedule') {
        scheduleRoute(response)
        return
    }

    if (request.url === '/teachers') {
        teachersRoute(response)
        return
    }
    
    notFoundRoute(response)
})

server.listen(3000, () => {
    console.log('Server is running...')
})