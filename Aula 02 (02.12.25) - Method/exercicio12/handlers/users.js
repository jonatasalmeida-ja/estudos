const users = {
    GET: function (req, res) {
        res.end('Listando usuários')
    },
    POST: function (req, res) {
        res.end('Criando usuário')
    },
    DELETE: function (req, res) {
        res.end('Removendo usuário')
    }
}

export { users }