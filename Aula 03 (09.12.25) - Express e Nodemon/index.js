import express from 'express';

const app = express() // const server = http.createServer(...)

app.get('/', (req, res) => { // if (method === 'GET' && path === '/')
    res.send('Servidor express funcionando') // res.writeHead + res.end
});

app.listen(3000, () => { // server.listen(...)
    console.log('Servidor rodando na porta 3000')
})