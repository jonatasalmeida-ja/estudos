import { sendJson } from "../utils/sendJson.js";

const booksList = [
 { "id":1,"title":"Dom Casmurro","author":"Machado de Assis" },
 { "id":2,"title":"1984","author":"George Orwell" },
 { "id":3,"title":"O Hobbit","author":"J.R.R. Tolkien" }
]

const books = {
    GET: (req, res, id) => {
        if (!id) {
            return sendJson(res, 200, booksList);
        }

        if (isNaN(id)) {
            return sendJson(res, 400, { error: 'ID inválido' });
        }

        const numberId = Number(id);
        const book = booksList.find(b => b.id === numberId);

        if (!book) {
            return sendJson(res, 404, { error: 'Livro não encontrado' });
        }

        sendJson(res, 200, book);
    },
    POST: (req, res, id) => {
        let body = '';

        req.on('data', chunk => {
            body += chunk
        });

        req.on('end', () => {
            const data = JSON.parse(body);

            const newId = booksList.length + 1;
            const newBook = {
                id: newId,
                title: data.title,
                author: data.author
            };

            booksList.push(newBook);

            sendJson(res, 201, newBook)
        });
    },
    DELETE: (req, res, id) => {
        if (!id) {
            return sendJson(res, 400, { error: 'Informe o ID' });
        }

        if (isNaN(id)) {
            return sendJson(res, 400, { error: 'ID inválido' });
        }

        const numberId = Number(id);
        const index = booksList.findIndex(b => b.id === numberId);

        if (index === -1) {
            return sendJson(res, 404, { error: 'Livro não encontrado' });
        }

        booksList.splice(index, 1);

        sendJson(res, 200, { message: 'Livro removido' });
    }
};

export { books };