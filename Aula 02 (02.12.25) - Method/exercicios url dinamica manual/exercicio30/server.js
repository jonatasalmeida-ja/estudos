import http from 'http';
import { routes } from './routes.js';
import { sendJson } from './utils/sendJson.js';

const server = http.createServer((req, res) => {
    const method = req.method;
    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = url.pathname;

    const parts = path.split('/');
    const basePath = `/${parts[1]}`;
    const id = parts[2];

    const route = routes[basePath];
    if (!route) {
        return sendJson(res, 404, { error: 'Página não encontrada' });
    }

    const handler = route[method];
    if (!handler) {
        return sendJson(res, 405, { error: 'Método não permitido' });
    }

    handler(req, res, id);
});

server.listen(3000, () => {
    console.log('Server is running...');
});