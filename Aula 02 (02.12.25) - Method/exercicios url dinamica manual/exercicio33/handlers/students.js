import { sendJson } from "../utils/sendJson.js";

const studentsList = [
  { id: 1, name: "Ana", course: "Matemática" },
  { id: 2, name: "Carlos", course: "História" },
  { id: 3, name: "Marina", course: "Física" }
];

const students = {
    GET: (req, res, id) => {
        if(!id) {
            return sendJson(res, 200, studentsList);
        }

        const numberId = Number(id);
        if (Number.isNaN(numberId)) {
            return sendJson(res, 400, { error: 'ID inválido' });
        }

        const student = studentsList.find(s => s.numberId === numberId);

        if (student === undefined) {
            return sendJson(res, 404, { error: 'Aluno não encontrado'})
        }
        return sendJson(res, 200, student);
    },
    POST: (req, res, id) => {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            const data = JSON.parse(body);
            const newId = studentsList.length + 1;
            const newStudent = {
                id: newId,
                name: data.name,
                course: data.course
            };
            studentsList.push(newStudent);
            return sendJson(res, 201, newStudent);
        });
    },
    DELETE: (req, res, id) => {
        if (!id) {
            return sendJson(res, 400, { error: 'Informe o ID' });
        }

        const numberId = Number(id);
        if (Number.isNaN(numberId)) {
            return sendJson(res, 400, { error: 'ID inválido' });
        }

        const index = studentsList.findIndex(s => s.id === numberId);
        if (index === -1) {
            return sendJson(res, 404, { error: 'ID não encontrado' });
        }

        studentsList.splice(index, 1);

        return sendJson(res, 200, { message: 'Aluno removido' });
    }
};

export { students };