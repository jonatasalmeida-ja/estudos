export function validateSong(body, options = { partial: false }) {
    const { title, artist, duration, released, profile } = body;

    if (!options.partial) {
        if (
            title === undefined ||
            artist === undefined ||
            duration === undefined ||
            released === undefined ||
            profile === undefined
        ) {
            return 'Todos os campos são obrigatórios';
        }
    }

    if (title !== undefined && typeof title !== 'string') return 'Título inválido'
    if (artist !== undefined && typeof artist !== 'string') return 'Artista inválido'
    if (duration !== undefined && typeof duration !== 'number') return 'Duração inválida'
    if (released !== undefined && typeof released !== 'boolean') return 'Lançamento inválido'
    if (profile !== undefined && !profile.includes('@')) return 'Perfil inválido'

    return null;
};