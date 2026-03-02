function validatePodcast(body, options = { partial: false }) {
    const { title, host, episodes, active } = body;

    if (!options.partial) {
        if (
            !title ||
            !host ||
            episodes === undefined ||
            active === undefined
        ) {
            return 'Todos os campos são obrigatórios';
        }
    }

    if (title !== undefined && typeof title !== 'string') return 'Título inválido';
    if (host !== undefined && typeof host !== 'string') return 'Host inválido';
    if (episodes !== undefined && typeof episodes !== 'number') return 'Episódios inválidos';
    if (active !== undefined && typeof active !== 'boolean') return 'Active inválido';

    return null
};

export { validatePodcast };