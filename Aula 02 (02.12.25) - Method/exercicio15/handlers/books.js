const books = {
    GET: function (req, res, id) {
        if (id) {
            res.end(`Buscando o livro com ID ${id}`)
        } else {
            res.end('Listando livros')
        }
    },
    DELETE: function (req, res, id) {
        if (!id) {
            res.end('Favor informar o ID')
        } else {
            res.end(`Removendo livro com ID ${id}`)
        }
    }
};

export { books };