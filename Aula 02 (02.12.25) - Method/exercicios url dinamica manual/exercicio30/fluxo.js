/*
Fluxo da requisição:

1. Server recebe request
2. URL é analisada
3. Rota é dividida (split)
4. basePath é identificado
5. Router encontra o handler
6. Método HTTP seleciona a função
7. Handler executa lógica (find no array)
8. sendJson envia a resposta
*/