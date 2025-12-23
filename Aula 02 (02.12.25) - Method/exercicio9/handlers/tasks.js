const tasks = {
    GET: function (req, res) {
        res.end('Listando tarefas')
    },
    POST: function (req, res) {
        res.end('Criando tarefa')
    },
    DELETE: function (req, res) {
        res.end('Removendo tarefa')
    }
}

export { tasks }