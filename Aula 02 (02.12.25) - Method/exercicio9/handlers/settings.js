const settings = {
    GET: function (req, res) {
        res.end('Exibindo configurações')
    },
    PUT: function (req, res) {
        res.end('Atualizando configurações')
    }
}

export { settings }