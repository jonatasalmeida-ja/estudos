const events = {
    GET: function (req, res, id) {
        if (!id) {
            res.end('Listando eventos');
        } else {
            res.end(`Buscando eventos com o ID ${id}`);
        }
    },
    POST: function (req, res, id) {
        res.end('Criando evento');
    }
};

export { events };