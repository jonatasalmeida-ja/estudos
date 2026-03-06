import { sendJson } from "../utils/sendJson.js";

const productsList = [
  { id: 1, name: "Notebook", price: 3500 },
  { id: 2, name: "Mouse", price: 120 },
  { id: 3, name: "Teclado", price: 250 }
];

const products = {
    GET: (req, res, id) => {
        if (!id) {
            return sendJson(res, 200, productsList);
        }

        const numberId = Number(id);
        const product = productsList.find(p => p.id === numberId);

        if (!product) {
            return sendJson(res, 404, { error: 'Produto não encontrado' });
        }

        sendJson(res, 200, product);
    },
    DELETE: (req, res, id) => {
        if (!id) {
            return sendJson(res, 400, { error: 'Informe o ID do produto' });
        }

        const numberId = Number(id);
        const product = productsList.find(p => p.id === numberId);

        if (!product) {
            return sendJson(res, 404, { error: 'Produto não encontrado' });
        }

        sendJson(res, 200, { message: 'Produto removido' });
    }
};

export { products };