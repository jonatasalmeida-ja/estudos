const authors = {
    GET: function (req, res, id) {
        if (id) {
            res.end(`Buscando autor com ID ${id}`)
        } else {
            res.end('Listando autores')
        }
    }
};

export { authors };