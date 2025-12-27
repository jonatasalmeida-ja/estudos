const users = {
    GET: function (req, res, id) {
        if (id) {
            res.end(`Buscando usuário com ID: ${id}`)
        } else {
            res.end('Listando usuários')
        }
    },
    DELETE: function (req, res, id) {
        if (!id) {
            res.end('Informe o id do produto')
            return
        }

        res.end(`Removendo usuário com ID: ${id}`)
    }
}

export { users }