export function validateTask(body, options = { partial: false }) {
    const { title, completed, priority } = body;

    if (!options.partial) {
        if (
            !title ||
            completed === undefined ||
            priority === undefined
        ) {
            return 'Todos os campos são obrigatórios';
        }
    }

    if (title !== undefined && typeof title !== 'string') return 'Título inválido'
    if (completed !== undefined && typeof completed !== 'boolean') return 'Informação se completo inválida'
    if (priority !== undefined && typeof priority !== 'number') return 'Prioridade inválida'

    return null;
};