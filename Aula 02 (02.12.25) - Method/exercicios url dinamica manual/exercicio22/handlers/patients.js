const patients = {
    GET: function (req, res, id) {
        if (!id) {
            res.end('Listando pacientes');
        } else {
            res.end(`Buscando paciente com ID ${id}`);
        }
    },
    POST: function (req, res, id) {
        res.end('Cadastrando paciente');
    },
    DELETE: function (req, res, id) {
        if (!id) {
            res.end('Informe o ID do paciente');
        } else {
            res.end(`Removendo paciente com ID ${id}`);
        }
    }
};

export { patients };