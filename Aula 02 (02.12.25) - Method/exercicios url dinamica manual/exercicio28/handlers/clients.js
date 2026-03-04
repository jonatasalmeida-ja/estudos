const clientsList = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Carlos" },
  { id: 3, name: "Marina" }
];

const clients = {
    GET: function(req, res, id) {
        if (!id) {
            res.statusCode = 200;
            res.setHeader('Content-type', 'application/json; charset=utf-8');
            res.end(JSON.stringify(clientsList));
            return;
        }

        const numberId = Number(id);
        const client = clientsList.find(c => c.id === numberId);

        if (!client) {
            res.statusCode = 404;
            res.setHeader('Content-type', 'application/json; charset=utf-8');
            res.end(JSON.stringify({ error: 'Cliente não encontrado' }));
            return;
        }

        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json; charset=utf-8');
        res.end(JSON.stringify(client));
    },

    DELETE: function(req, res, id) {
        if (!id) {
            res.statusCode = 400;
            res.setHeader('Content-type', 'application/json; charset=utf-8');
            res.end(JSON.stringify({ error: 'Informe o ID do Cliente' }));
            return;
        }

        const numberId = Number(id);
        const client = clientsList.find(c => c.id === numberId);
        
        if (!client) {
            res.statusCode = 404;
            res.setHeader('Content-type', 'application/json; charset=utf-8');
            res.end(JSON.stringify({ error: 'Cliente não enontrado '}));
            return;
        }

        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({ message: 'Cliente removido'}));
    }
};

export { clients };