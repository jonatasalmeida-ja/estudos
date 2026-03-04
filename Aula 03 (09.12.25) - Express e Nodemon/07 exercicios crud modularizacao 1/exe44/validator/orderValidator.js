export function validateOrder(body, options = { partial: false }) {
    const { customer, total, delivered } = body;

    if (!options.partial) {
        if (
            !customer ||
            total === undefined ||
            delivered === undefined
        ) {
            return 'Todos os campos são obrigatórios';
        }
    }

    if (customer !== undefined && typeof customer !== 'string') return 'Título inválido';
    if (total !== undefined && typeof total !== 'number') return 'Total inválido';
    if (delivered !== undefined && typeof delivered !== 'boolean') return 'Informação se entregue inválida';

    return null;
};