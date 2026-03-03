export function home(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain; charset=utf-8');
    res.end('Bem-vindo ao Servidor');
};