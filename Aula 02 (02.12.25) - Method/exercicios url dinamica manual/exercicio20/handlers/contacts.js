const contacts = {
    GET: function (req, res, id) {
        if (!id) {
            res.end('Listando contatos');
        } else {
            res.end(`Buscnaod contato com ID ${id}`);
        }
    },
    POST: function (req, res, id) {
        res.end('Criando contato');
    },
    DELETE: function (req, res, id) {
        if (!id) {
            res.end('Informar o ID do contato');
        } else {
            res.end(`Removendo contato com ID ${id}`);
        }
    }
};

export { contacts };