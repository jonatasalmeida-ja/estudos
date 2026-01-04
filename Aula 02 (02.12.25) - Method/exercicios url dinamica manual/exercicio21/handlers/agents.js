const agents = {
    GET: function (req, res, id) {
        if (!id) {
            res.end('Listando agentes');
        } else {
            res.end(`Buscando agente com ID ${id}`);
        }
    },
    POST: function (req, res, id) {
        res.end('Cadastrando agente');
    }
};

export { agents };