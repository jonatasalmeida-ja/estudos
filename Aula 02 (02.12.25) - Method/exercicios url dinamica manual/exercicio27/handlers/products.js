const productsList = [
  { id: 1, name: "Teclado" },
  { id: 2, name: "Mouse" }
];

const products = {
    GET: function (req, res, id) {
        if (!id) {
            res.statusCode = 200;
            res.setHeader('Content-type', 'application/json; charset=utf-8');
            res.end(JSON.stringify(productsList));
            return; 
        } 
        
        const numberId = Number(id);
        const product = productsList.find(p => p.id === numberId);
        
        if (!product) {
            res.statusCode = 404;
            res.setHeader('Content-type', 'application/json; charset=utf-8');
            res.end(JSON.stringify({ message: 'Produto não encontrado'}));
            return;
        }

        res.end(JSON.stringify(product));
    },
    POST: function (req, res, id) {
        res.statusCode = 201
        res.setHeader('Content-type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({ message: 'Produto criado com sucesso'}));
    }
};

export { products };