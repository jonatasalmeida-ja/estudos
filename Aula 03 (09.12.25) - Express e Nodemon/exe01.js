import express from 'express';

const app = express() // como se fosse: const server = http.serverCreate()

app.get('/', (req, res) => { // como se fosse: if (method === 'GET' && path === '/')
    res.send('Exercício Express funcionando') // como se fosse: res.writeHead + res.end
})

app.listen(3000, () => { // como se fosse: server.listen(...)
    console.log('Server is running...')
})