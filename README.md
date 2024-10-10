# Foodie-Delivery

Foodie Delivery é um aplicativo móvel desenvolvido em React Native com um backend em Node.js. Este aplicativo permite aos usuários explorar cardápios, adicionar seus lanches favoritos.

## Tecnologias Utilizadas

- **Frontend:** React Native
- **Backend:** Node.js
- **Banco de Dados:** SQLite

## Clonando o Repositório
#### Clone o repositório do projeto para sua máquina local usando o comando:
```bash
git clone https://github.com/ThiCsCosta/Foodie-Delivery.git
````
## Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento para este projeto.

### Pré-requisitos
Certifique-se de ter o Node.js e npm instalados em sua máquina.

````bash
# Verifique a versão do Node.js
node -v

# Verifique a versão do npm
npm -v

# Instalando as dependências
npm install

#Baixando as dependências do Expo
expo install

#Para rodar o projeto
npx expo start
````
## Estrutura do Projeto
````bash

foodie-Delivery/
│
├── backend/            # Código do servidor Node.js
│   ├── config/         # Configurações do projeto
│   ├── controllers/    # Lógica dos controladores
│   ├── models/         # Modelos do banco de dados
│   ├── routes/         # Definição das rotas
│   └── app.js          # Ponto de entrada do servidor
│
├── frontend/           # Código do aplicativo React Native
│   ├── src/
│   │   ├── components/ # Componentes React Native
│   │   ├── screens/    # Telas do aplicativo
│   │   ├── navigation/ # Configuração de navegação
│   │   └── App.js      # Ponto de entrada do aplicativo
│
└── README.md           # Documentação do projeto
````
