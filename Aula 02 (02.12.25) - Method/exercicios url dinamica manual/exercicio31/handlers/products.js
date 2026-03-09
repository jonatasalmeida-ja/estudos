import { sendJson } from "../utils/sendJson";

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

        if (isNaN(id)) {
            return sendJson(res, 400, { error: 'ID inválido' });
        }

        const numberId = Number(id);
        const product = productsList.find(p => p.id === numberId);

        if (!product) {
            return sendJson(res, 404, { error: 'Produto não encontrado' });
        }

        sendJson(res, 200, product);
    },
    POST: (req, res, id) => {
        return sendJson(res, 201, { message: 'Produto cadastrado com sucesso' });
    },
    DELETE: (req, res, id) => {
        if (!id) {
            return sendJson(res, 400, { error: 'Informe o ID' });
        }

        if (isNaN(id)) {
            return sendJson(res, 400, { error: 'ID inválido' });
        }

        const numberId = Number(id);
        const index = productsList.findIndex(p => p.id === numberId);

        if (index === -1) {
            return sendJson(res, 404, { error: 'Produto não encontrado' });
        }

        productsList.splice(index, 1);

        sendJson(res, 200, { message: 'Produto removido' });
    }
};

export { products };