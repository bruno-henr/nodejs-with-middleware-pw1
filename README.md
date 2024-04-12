## Projeto de Gerenciamento de Tecnologias de Estudo por Usuário

Este é um projeto desenvolvido em Node.js para gerenciar uma lista de tecnologias de estudo por usuário. A aplicação permite a criação, leitura, atualização e exclusão de usuários e suas respectivas tecnologias de estudo.

### Funcionalidades

- Cadastro de usuários com nome e nome de usuário (username).
- Adição de tecnologias de estudo por usuário.
- Listagem de todas as tecnologias de estudo por usuário.
- Atualização das informações de um usuário.
- Exclusão de suas respectivas tecnologias de estudo.

### Endpoints da API

A API possui os seguintes endpoints:

- **POST /users**: Cria um novo usuário.
- **GET `/technologies`**: Retorna as tecnologias de um usuário especifico.
- **POST `/technologies`**: Adicionar uma nova tecnologia.
- **PUT `/technologies/:id`**: Edita uma tecnologia.
- **PATCH `/technologies/:id/studied`**: Marca uma tecnologia como estuda.
- **DELETE `/technologies/:id`**: Remove uma tecnologia de um usuário.

### Configuração do Ambiente

Para executar o projeto localmente, siga estas etapas:

1. Clone este repositório para o seu ambiente local.
2. Certifique-se de ter o Node.js e o npm instalados em sua máquina.
3. No diretório do projeto, execute `yarn` para instalar as dependências.
4. Execute `yarn dev` para iniciar o servidor.

### Tecnologias Utilizadas

- Node.js
- Express.js

### Estrutura do Projeto

A estrutura de diretórios do projeto é organizada da seguinte forma:

- **controllers**: Contém os controladores para cada rota da API.
- **routes**: Define as rotas da API utilizando o Express.js.
- **middleware**: Contém os middlewares utilizados na aplicação.
- **index.js**: Arquivo principal que inicia o servidor e configura as rotas da API.

### Testes de software

Para rodar os testes criados, execute no terminal: `yarn test`

### Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues para relatar bugs, sugerir novas funcionalidades ou enviar pull requests para melhorar o projeto.

---

Este é apenas um exemplo de README para o seu projeto. Certifique-se de adaptá-lo de acordo com as especificidades do seu projeto, incluindo instruções de instalação, configuração e uso específicas, bem como informações sobre licença, equipe de desenvolvimento, entre outros detalhes relevantes.
