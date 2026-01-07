function validateCourse(body, options = { partial: false }) {
    const { title, hours, level, active } = body;

    if (!options.partial) {
        if (
            !title ||
            hours === undefined ||
            !level ||
            active === undefined
        ) {
            return "Todos os campos são obrigatórios"
        }
    }

    if (title !== undefined && typeof title !== 'string') return 'Título inválido';
    if (hours !== undefined && typeof hours !== 'number') return 'Horas inválidas';
    if (level !== undefined && typeof level !== 'string') return 'Nível inválido';
    if (active !== undefined && typeof active !== 'boolean') return 'Informação se ativo inválida';

    return null;
}

export { validateCourse };