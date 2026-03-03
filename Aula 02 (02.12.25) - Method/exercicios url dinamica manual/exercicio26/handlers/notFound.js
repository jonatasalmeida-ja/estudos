export function notFound(req, res) {
    res.statusCode = 404
    res.setHeader('Content-type','text/plain; charset=utf-8');
    res.end('Rota não encontrada');
};