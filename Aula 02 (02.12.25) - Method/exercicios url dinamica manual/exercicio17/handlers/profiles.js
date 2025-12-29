const profiles = {
    GET: function (req, res, id) {
        if(!id) {
            res.end('Perfil não encontrado');
        } else {
            res.end(`Buscando perfil com ID ${id}`);
        }
    }
};

export { profiles };