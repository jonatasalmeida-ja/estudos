export function validateCar(body, options = { partial: false }) {
    const { brand, model, year, electric, manufacturerSite } = body;

    if (!options.partial) {
        if (
            brand === undefined ||
            model === undefined ||
            year === undefined ||
            electric === undefined ||
            manufacturerSite === undefined
        ) {
            return 'Todos os campos são obrigatórios';
        }
    }

    if (brand !== undefined && typeof brand !== 'string') return 'Marca inválida'
    if (model !== undefined && typeof model !== 'string') return 'Modelo inválido'
    if (year !== undefined && typeof year !== 'number') return 'Ano inválido'
    if (electric !== undefined && typeof electric !== 'boolean') return 'Informação se elétrico inválida'
    if (manufacturerSite !== undefined && !manufacturerSite.includes('.com')) return 'Site inválido'

    return null;
};