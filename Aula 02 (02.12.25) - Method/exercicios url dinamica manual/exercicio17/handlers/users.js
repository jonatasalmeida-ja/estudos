const users = {
    GET: function (req, res) {
        res.end('Listando usuários');
    },

    DELETE: function (req, res, id) {
        if (!id) {
            res.end('Usuário não encontrado');
            return
        } else {
            res.end(`Removendo usuário com ID ${id}`);
        }
    }
};

export { users };