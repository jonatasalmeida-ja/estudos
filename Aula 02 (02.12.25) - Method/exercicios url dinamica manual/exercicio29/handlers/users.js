const usersList = [
  { id: 1, name: "João" },
  { id: 2, name: "Maria" },
  { id: 3, name: "Pedro" }
];

const users = {
    GET: function(req, res, id) {
        if (!id) {
            res.statusCode = 200;
            res.setHeader('Content-type', 'application/json; charset=utf-8');
            res.end(JSON.stringify(usersList));
            return;
        }

        const numberId = Number(id);
        const user = usersList.find(usr => usr.id === numberId);
        if (!user) {
            res.statusCode = 404;
            res.setHeader('Content-type', 'application/json; charset=utf-8');
            res.end(JSON.stringify({ error: 'Usuário não encontrado' }));
            return;
        }

        res.statusCode = 200
        res.setHeader('Content-type', 'application/json; charset=utf-8');
        res.end(JSON.stringify(user))
    },
    DELETE: function(req, res, id) {
        if (!id) {
            res.statusCode = 400;
            res.setHeader('Content-type', 'application/json; charset=utf-8');
            res.end(JSON.stringify({ error: 'Informe o ID do usuário'}));
            return;
        }

        const numberId = Number(id);
        const user = usersList.find(usr => usr.id === numberId);
        if (!user) {
            res.statusCode = 404;
            res.setHeader('Content-type', 'application/json; charset=utf-8');
            res.end(JSON.stringify({ error: 'Usuário não encontrado '}));
            return;
        }

        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({ message: 'Usuário Removido' }));
    }
};

export { users };