const books = {
    GET: function (req, res, id) {
        if (!id) {
            res.end('Listando livros');
        } else {
            res.end(`Buscando livro com ID ${id}`);
        }
    },
    POST: function (req, res, id) {
        res.end('Cadastrando livro');
    },
    DELETE: function (req, res, id) {
        if (!id) {
            res.end('Informe o ID do livro');
        } else {
            res.end(`Removendo o livro com ID ${id}`);
        }
    }
};

export { books };