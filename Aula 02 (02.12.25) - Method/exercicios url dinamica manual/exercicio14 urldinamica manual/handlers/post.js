const post = {
    GET: function (req, res, id) {
        if (id) {
            res.end(`Buscando post com ID ${id}`)
        } else {
            res.end('Listando posts')
        }
    }
}

export { post }