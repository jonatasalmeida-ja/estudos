import { sendJson } from "../utils/sendJson.js";

const moviesList = [
  { id: 1, title: "Inception", year: 2010 },
  { id: 2, title: "The Matrix", year: 1999 },
  { id: 3, title: "Interstellar", year: 2014 }
];

const movies = {
  GET: (req, res, id) => {
    if (!id) {
      return sendJson(res, 200, moviesList);
    }

    if (isNaN(id)) {
      return sendJson(res, 400, { error: 'ID inválido' });
    }
  
    const numberId = Number(id);
    const movie = moviesList.find(mv => mv.id === numberId);

    if (!movie) {
      return sendJson(res, 404, { error: 'Filme não encontrado' });
    }
    sendJson(res, 200, movie);
  },
  POST: (req, res, id) => {
    return sendJson(res, 201, { message: 'Filme criado com sucesso' });  
  },
  DELETE: (req, res, id) => {
    if (!id) {
      return sendJson(res, 400, { error: 'Informe o ID' });
    }

    if (isNaN(id)) {
      return sendJson(res, 400, { error: 'ID inválido' });
    }

    const numberId = Number(id);
    const index = moviesList.findIndex(mv => mv.id === numberId);

    if (index === -1) {
      return sendJson(res, 404, { error: 'Filme não encontrado' });
    }

    moviesList.splice(index, 1);

    sendJson(res, 200, { message: 'Filme removido'});
  }
};

export { movies };