import { sendJson } from "../utils/sendJson.js";

const usersList = [
  { id: 1, name: "João" },
  { id: 2, name: "Maria" },
  { id: 3, name: "Pedro" }
];

const users = {
    GET: function(req, res, id) {
        if (!id) {
            sendJson(res, 200, usersList);
            return;
        }

        const numberId = Number(id);
        const user = usersList.find(usr => usr.id === numberId);
        if (!user) {
            sendJson(res, 404, { error: "Usuário não encontrado" });
            return;
        }

        sendJson(res, 200, user);
    },
    DELETE: function(req, res, id) {
        if (!id) {
            sendJson(res, 400, { error: 'Informe o ID do usuário '});
            return;
        }

        const numberId = Number(id);
        const user = usersList.find(usr => usr.id === numberId);
        if (!user) {
            sendJson(res, 404, { error: 'Usuário não encontrado' })
            return;
        }

        sendJson(res, 200, { message: 'Usuário Removido' });
    }
};

export { users };