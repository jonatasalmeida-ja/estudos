import http from 'http';
import { routes } from './routes.js';

const server = http.createServer((req, res) => {
    const method = req.method;
    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = url.pathname;

    res.writeHead(200, {
        'Content-type':'application/json; charset=utf-8'
    });

    const parts = path.split('/');
    const basePath = `/${parts[1]}`;
    const id = parts[2];

    const route = routes[basePath];

    if (!route) {
        res.end('Página não encontrada');
        return;
    }

    const handler = route[method];

    if (!handler) {
        res.end('Método não permitido');
        return;
    }

    handler(req, res, id);
})

server.listen(3000, () => {
    console.log('Server is running...');
});