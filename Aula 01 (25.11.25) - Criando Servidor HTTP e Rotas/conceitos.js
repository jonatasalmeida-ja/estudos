/*
- request → tudo que a pessoa que chegou está pedindo
- response → o que você vai devolver para ela

------------------------------------------------------------------
request.url é simplesmente o endereço que a pessoa tentou acessar no seu servidor.
Se você acessar no navegador, por exemplo: http://localhost:3000/login
O request.url vai ser: /login

------------------------------------------------------------------
→ url.search
url.search sempre devolve a parte completa de busca, começando com ?

Para esta URL: http://localhost:3000/saudacao?nome=Joana
O search é: ?nome=Joana

→ url.searchParams.get("nome"): Joana

-------------------------------------------------------------------

*/