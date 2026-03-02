const dishes = {
    GET: function (req, res, id) {
        if (!id) {
            res.end('Listando pratos');
        } else {
            res.end(`Buscando prato com ID: ${id}`);
        }
    },
    POST: function (req, res, id) {
        res.end('Cadastrando prato');
    },
    DELETE: function (req, res, id) {
        if (!id) {
            res.end('Informe o ID do prato');
        } else {
            res.end(`Removendo prato com ID: ${id}`);
        }
    }
};

export { dishes };