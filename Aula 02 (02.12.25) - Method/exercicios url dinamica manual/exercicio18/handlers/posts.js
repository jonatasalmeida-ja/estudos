const posts = {
    GET: function (req, res, id) {
        if (!id) {
            res.end('Listando posts');
            return
        } else {
            res.end(`Buscando post com ID ${id}`)
        }
    },
    POST: function (req, res, id) {
        res.end('Criando post');
    },
    DELETE: function (req, res, id) {
        if (!id) {
            res.end('Informe o ID do Post');
        } else {
            res.end(`Removendo post com ID ${id}`);
        }
    }
};

export { posts };