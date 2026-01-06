function validadeGame(body, options = { partial: false }) {
    // FALSE = POST -- TRUE: PATCH
    const { title, platform, price, online } = body;

    if (!options.partial) {
        // Se for POST, entra nesse if
        if (!title || !platform || price === undefined || online === undefined) {
            return 'Todos os campos são obrigatórios';
        }
    }

    // Se for PATCH, vem direto para essas validações
    if (title !== undefined && typeof title !== 'string') return ('Título inválido');
    if (platform !== undefined && typeof platform !== 'string') return ('Plataforma inválida');
    if (price !== undefined && typeof price !== 'number') return ('Preço inválido');
    if (online !== undefined && typeof online !== 'boolean') return ('Informação de Online inválida');

    return null;
}

export { validadeGame };


let options = {partial: false};
console.log(!options.partial)