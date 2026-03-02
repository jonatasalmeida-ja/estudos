const userList = [
    { id: 1, name: "Ana", age: 25 },
    { id: 2, name: "Carlos", age: 30 }
];

const users = {
    GET: function (req, res, id) {
        if (!id) {
            res.end(JSON.stringify(userList));
            return;
        }

        const numberId = Number(id);

        const user = userList.find(usr => usr.id === numberId);

        if (!user) {
            res.statusCode = 404;
            res.end(JSON.stringify({ message: 'Usuário não encontrado' }))
            return;
        }

        res.end(JSON.stringify(user));
    }
};

export { users };