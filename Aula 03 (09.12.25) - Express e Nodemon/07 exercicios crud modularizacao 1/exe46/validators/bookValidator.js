export function validateBook(body, options = { partial: false }) {
    const { title, pages, available, genre } = body;

    if (!options.partial) {
        if (
            title === undefined ||
            pages === undefined ||
            available === undefined ||
            genre === undefined
        ) {
            return 'Todos os campos são obrigatórios';
        }
    }

    if (title !== undefined && typeof title !== 'string') return 'Título inválido'
    if (pages !== undefined && typeof pages !== 'number') return 'Número de páginas inválido'
    if (available !== undefined && typeof available !== 'boolean') return 'Disponibilidade inválida'
    if (genre !== undefined && !genre.includes('#')) return 'Gênero inválido'

    return null
};