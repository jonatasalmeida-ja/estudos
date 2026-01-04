const tickets = {
    GET: function (req, res, id) {
        if (!id) {
            res.end('Listando chamados');
        } else {
            res.end(`Buscando chamado com ID ${id}`);
        }
    },
    POST: function (req, res, id) {
        res.end('Abrindo chamado');
    },
    DELETE: function (req, res, id) {
        if (!id) {
            res.end('Informe o ID do chamado');
        } else {
            res.end(`Fechando chamado com ID ${id}`);
        }
    }
};

export { tickets };