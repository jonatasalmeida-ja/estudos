export function validateConsole(body, options = { partial: false }) {
    const { name, brand, releaseYear, portable, website } = body

    if (!options.partial) {
        if (
            name === undefined ||
            brand === undefined ||
            releaseYear === undefined ||
            portable === undefined ||
            website === undefined
        ) {
            return 'Todos os campos são obrigatórios';
        }
    }

    if (name !== undefined && typeof name !== 'string') return 'Nome inválido'
    if (brand !== undefined && typeof brand !== 'string') return 'Marca inválida'
    if (releaseYear !== undefined && typeof releaseYear !== 'number') return 'Ano de lançamento inválido'
    if (portable !== undefined && typeof portable !== 'boolean') return 'Informação se portátil inválida'
    if (website !== undefined && !website.includes('.com')) return 'Website inválido'

    return null;
}