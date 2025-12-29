const profiles = {
    GET: function (req, res, id) {
        if (id) {
            res.end(`Buscando perfil com ID ${id}`)
        } else {
            res.end('Listando perfis')
        }
    }
};

export { profiles };