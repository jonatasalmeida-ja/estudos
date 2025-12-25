const sessions = {
    POST: function (req, res) {
        res.end('Login realizado')
    },
    DELETE: function (req, res) {
        res.end('Logout realizado')
    }
}

export { sessions }