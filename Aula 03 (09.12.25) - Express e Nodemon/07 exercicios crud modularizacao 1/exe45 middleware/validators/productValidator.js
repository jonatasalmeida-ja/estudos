export function validateProduct(body, options = { partial: false }) {
    const { name, price, inStock, category } = body;

    if (!options.partial) {
        if (
            !name ||
            price === undefined ||
            inStock === undefined ||
            !category
        ) {
            return 'Todos os campos são obrigatórios';
        }
    }

    if (name !== undefined && typeof name !== 'string') return 'Nome inválido'
    if (price !== undefined && typeof price !== 'number') return 'Preço inválido'
    if (inStock !== undefined && typeof inStock !== 'boolean') return 'Informação de estoque inválida'
    if (category !== undefined && !category.includes('@')) return 'Categoria inválida'

    return null;
};