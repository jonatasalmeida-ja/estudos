import http from 'http';
import { routes } from './routes.js';

const server = http.createServer((req, res) => {
    const method = req.method;
    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = url.pathname;

    const parts = path.split('/');
    const basePath = `/${parts[1]}`;
    const id = parts[2];

    const route = routes[basePath];

    if (!route) {
        res.statusCode = 404;
        res.setHeader('Content-type', 'text/plain; charset=utf-8');
        res.end('Página não encontrada');
        return;
    }

    const handler = route[method];

    if (!handler) {
        res.statusCode = 404;
        res.setHeader('Content-type', 'text/plain; charset=utf-8');
        res.end('Método não permitido');
        return;
    }

    handler(req, res, id);
});

server.listen(3000, () => {
    console.log('Server is running...');
});