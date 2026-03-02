export function ordersRoute(req, res, url) {
    const nome = url.searchParams.get('nome');

    if (!nome) {
        res.send('Por favor informe o pedido usando /orders?nome=NomeDoPedido');
    } else {
        res.send(`Você pesquisou pelo pedido: ${nome}`);
    }
};