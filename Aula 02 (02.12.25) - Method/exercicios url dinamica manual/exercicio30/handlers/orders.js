import { sendJson } from "../utils/sendJson.js";

const ordersList = [
  { id: 1, product: "Notebook", quantity: 1 },
  { id: 2, product: "Mouse", quantity: 2 },
  { id: 3, product: "Teclado", quantity: 1 }
];

const orders = {
    GET: (req, res, id) => {
        if (!id) {
            return sendJson(res, 200, ordersList);
        }

        const numberId = Number(id);
        const order = ordersList.find(ord => ord.id === numberId);

        if (!order) {
            return sendJson(res, 404, { error: 'Pedido não encontrado' });
        }

        sendJson(res, 200, order);
    },
    POST: (req, res, id) => {
        return sendJson(res, 201, { message: 'Pedido criado com sucesso' });
    },
    DELETE: (req, res, id) => {
        if (!id) {
            return sendJson(res, 400, { error: 'Informar o ID' });
        }

        const numberId = Number(id);
        const order = ordersList.find(ord => ord.id === numberId);

        if (!order) {
            return sendJson(res, 404, { error: 'Pedido não encontrado' });
        }

        sendJson(res, 200, { message: 'Pedido removido' });
    }
};

export { orders };