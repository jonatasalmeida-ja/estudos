function validateEbook(body, option = { partial: false}) {
    const { title, author, year, pages } = body;

    if (!option.partial) {
        if (
            !title ||
            !author ||
            year === undefined ||
            pages === undefined
        ) {
            return 'Todos os campos são obrigatórios';
        }
    };

    if (title !== undefined && typeof title !== 'string') return 'Título inválido';
    if (author !== undefined && typeof author !== 'string') return 'Autor inválido';
    if (year !== undefined && typeof year !== 'number') return 'Ano inválido';
    if (pages !== undefined && typeof pages !== 'number') return 'Páginas inválidas';

    return null;
};

export { validateEbook };