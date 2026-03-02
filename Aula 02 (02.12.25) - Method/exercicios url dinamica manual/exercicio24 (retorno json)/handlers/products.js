const productList = [
    { id: 1, name: "Teclado", price: 150 },
    { id: 2, name: "Mouse", price: 80 }
];

const products = {
    GET: function (req, res, id) {
        if (!id) {
            res.end(JSON.stringify(productList));
            return;
        }
        
        const numberId = Number(id);

        const product = productList.find(p => p.id === numberId)

        if (!product) { 
            res.statusCode = 404;
            res.end(JSON.stringify({ message: 'Produto não encontrado'}))
            return;
        }

        res.end(JSON.stringify(product));
    }
};  

export { products };