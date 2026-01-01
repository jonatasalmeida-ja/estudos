const loans = {
    GET: function (req, res, id) {
        if (!id) {
            res.end('Listando empréstimos');
        } else {
            res.end(`Buscando empréstimo com ID ${id}`);
        }
    },
    POST: function (req, res, id) {
        res.end('Criando empréstimo')
    }
};

export { loans };