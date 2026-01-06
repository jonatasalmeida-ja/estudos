function validateMovie(body, options = { partial: false}) {
    // false: Post - true: Patch
    const { title, year, duration, watched } = body

    if (!options.partial) { // Caso Post, entra aqui
        if (!title || year === undefined || duration === undefined || watched === undefined)  {
            return 'Todos os campos são obrigatórios'
        }
    }

    //Caso Patch, entra aqui
    if (title !== undefined && typeof title !== 'string') return 'Título inválido';
    if (year !== undefined && typeof year !== 'number') return 'Ano inválido';
    if (duration !== undefined && typeof duration !== 'number') return 'Duração inválida';
    if (watched !== undefined && typeof watched !== 'boolean') return 'Watched inválido';

    return null;
};

export { validateMovie };