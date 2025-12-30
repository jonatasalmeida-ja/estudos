const comments = {
    GET: function (req, res, id) {
        if (!id) {
            res.end('Listando comentários');
        } else {
            res.end(`Buscando comentário com ID ${id}`)
        }
    }
};

export { comments };