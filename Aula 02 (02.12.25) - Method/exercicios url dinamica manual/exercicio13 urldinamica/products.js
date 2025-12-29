const products = {
    GET: function   (req, res, id) {
        if (id) {
            res.end(`Buscando produto com ID ${id}`)
        } else {
            res.end('Listando produtos')
        }
    },
    POST: function (req, res, id) {
        res.end('Buscando produto com ID 10')
    },
    DELETE: function (req, res, id) {
        if (!id) {
            res.end('Informe o ID do produto')
            return
        }

        res.end(`Removendo produto com ID ${id}`)
    }
}

export { products }