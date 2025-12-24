const categories = {
    GET: function (req, res) {
        res.end('Listando categorias')
    },
    POST: function (req, res) {
        res.end('Criando categoria')
    }
}

export { categories }