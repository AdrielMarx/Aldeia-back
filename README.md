### **Kagehub - Backend README**

# Kagehub - Backend

Este repositório contém o backend do Kagehub, responsável por gerenciar a lógica de negócio e persistência de dados.

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução JavaScript server-side.
- **Express**: Framework para construção de APIs.
- **MySQL**: Banco de dados relacional para armazenamento de dados.
- **JWT**: Autenticação e controle de sessões.
- **Sequelize**: ORM para modelagem e comunicação com o banco de dados MySQL.

## Funcionalidades Principais
- API RESTful para criação, listagem e gerenciamento de ninjas e missões.
- Integração com Firebase Authentication para controle de acesso.
- Armazenamento seguro de dados dos usuários e suas missões.
- Autenticação e autorização baseadas em JWT.

## Como Executar
1. Clone o repositório:
   git clone https://github.com/AdrielMarx/Aldeia-back
2. Instale as dependências:
   npm install
3. Configure o arquivo .env com as variáveis de ambiente (MySQL, Firebase, etc.).
4. Execute as migrações para o banco de dados:
   npx sequelize db:migrate
5. Inicie o servidor:
   npm run dev
6. A API esta´ra disponível em: http://localhost:3000

## Contribuição
Pull requests são bem-vindos. Para mudanças significativas, por favor, abra um issue primeiro para discutir o que você gostaria de mudar.
