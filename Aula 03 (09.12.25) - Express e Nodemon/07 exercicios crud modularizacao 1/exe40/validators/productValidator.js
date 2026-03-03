export function validateProduct(body, options = { partial: false }) {
    const { name, price, inStock } = body;

    if (!options.partial) { 
        if (
            !name ||
            price === undefined ||
            inStock === undefined
        ) {
            return 'Todos os campos são obrigatórios';
        }
    }

    if (name !== undefined && typeof name !== 'string') return 'Nome inválido'
    if (price !== undefined && typeof price !== 'number') return 'Preço inválido'
    if (inStock !== undefined && typeof inStock !== 'boolean') return 'Em estoque inválido'

    return null
};