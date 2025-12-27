const users = {
    GET: function (req, res) {
        res.end('Listando usuários')
    },
    POST: function (req, res) {
        res.end('Criando usuário')
    }
}

export { users }