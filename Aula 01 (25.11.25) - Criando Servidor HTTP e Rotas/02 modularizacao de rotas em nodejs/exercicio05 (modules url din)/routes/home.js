export function homeRoute(response) {
    response.end(`Bem-vindo ao Servidor de Games e Consoles!
Rotas disponíveis:
/games
/consoles
/game?nome=NomeDoGame
`)
}