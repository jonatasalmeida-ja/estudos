const products = {
    GET: function (req, res) {
        res.end('Listando produtos')
    },
    POST: function (req, res) {
        res.end('Criando produto')
    },
    DELETE: function (req, res) {
        res.end('Removendo produto')
    }
}

export { products }