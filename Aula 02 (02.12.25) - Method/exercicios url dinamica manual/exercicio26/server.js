import http from 'http'
import { routes } from './routes.js'
import { notFound } from './handlers/notFound.js';

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = url.pathname;

    const route = routes[path];

    if (!route) {
        notFound(req, res);
        return;
    }

    route(req, res)
})

server.listen(3000, () => {
    console.log('Server is running...')
})