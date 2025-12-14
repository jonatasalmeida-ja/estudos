// 1. Importando o módulo http
// → É como contratar a empresa responsável por fornecer porteiros.
// const http = require('http');
import http from 'node:http'

// 2. Criando o servidor
// → Aqui estamos chamando a empresa para enviar um porteiro treinado.
//   Toda vez que alguém bater na porta do prédio, essa função é executada.
const server = http.createServer((request, response) => {
    // 3. request.url
    // → A URL é como o andar ou sala que o visitante quer acessar.
    console.log('Visitante tentou acessar:', request.url)

    // 4. Verificando se existe uma URL
    // → Sempre existe, então isso é apenas um exemplo didático.
    if (request.url) {
        console.log('Porteiro diz: "Alguém está acessando o prédio"');
    }

    // 5. Enviando a resposta
    // → Aqui o porteiro entrega a resposta para o visitante e encerra o atendimento.
    response.end('Olá mundo — o servidor recebeu sua visita!');
});

// 6. Colocando o porteiro para trabalhar na porta 3000
// → Agora o prédio está oficialmente aberto e recebendo visitantes.
server.listen(3000, () => {
    console.log('Servidor está rodando na porta 3000...');
});

// node revisaoaula01.js