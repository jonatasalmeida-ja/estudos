function validateNovela(body, options = { partial: false }) {
    const { title, episodes, network, finished } = body;

    if (!options.partial) {
        if (
            !title ||
            episodes === undefined ||
            !network ||
            finished === undefined
        ) {
            return 'Todos os campos são obrigatórios';
        }
    }

    if (title !== undefined && typeof title !== 'string') return 'Título inválido';
    if (episodes !== undefined && typeof episodes !== 'number') return 'Episódios inválidos';
    if (network !== undefined && typeof network !== 'string') return 'Network inválido';
    if (finished !== undefined && typeof finished !== 'boolean') return 'Informação se finalizada inválida';

    return null;
}

export { validateNovela };