const user = {
  "nome": "Jonatas",
  "curso": "Node.js"
};

export function json(req, res) {
    res.setHeader('Content-type', 'application/json; charset=utf-8');
    res.statusCode = 200;
    res.end(JSON.stringify(user));
};