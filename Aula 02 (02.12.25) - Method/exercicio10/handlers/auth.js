const auth = {
    GET: function (req, res) {
        res.end('Login realizado')
    },
    POST: function(req, res) {
        res.end('Logout realizado')
    }
}

export { auth }