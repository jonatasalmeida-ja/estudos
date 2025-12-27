const comments = {
    GET: function (req, res, id) {
        if (id) {
            res.end(`Buscando comentário com ID ${id}`)
        } else {
            res.end('Listando comentários')
        }
    },
    DELETE: function (req, res, id) {
        if (!id) {
            res.end('Digite o ID que deseja remover')
        } else {
            res.end(`Removendo comentário com ID ${id}`)
        }
    }
};

export { comments };