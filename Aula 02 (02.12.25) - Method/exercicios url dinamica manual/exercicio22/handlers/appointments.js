const appointments = {
    GET: function (req, res, id) {
        if (!id) {
            res.end('Listando consultas');
        } else {
            res.end(`Buscando consulta com ID ${id}`);
        }
    },
    POST: function (req, res, id) {
        res.end('Agendando consulta');
    }
};

export { appointments };