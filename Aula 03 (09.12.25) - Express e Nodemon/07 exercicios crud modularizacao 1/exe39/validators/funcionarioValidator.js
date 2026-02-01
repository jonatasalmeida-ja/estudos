export function validateFuncionario(body, options = { partial: false }) {
    const { name, salary, active } = body;

    if (!options.partial) {
        if (
            !name ||
            salary === undefined ||
            active === undefined
        ) {
            return 'Todos os campos são obrigatórios';
        }
    }

    if (name !== undefined && typeof name !== 'string') return 'Nome inválido';
    if (salary !== undefined && typeof salary !== 'number') return 'Salário inválido';
    if (active !== undefined && typeof active !== 'boolean') return 'Informação de Ativo inválida';

    return null;
};