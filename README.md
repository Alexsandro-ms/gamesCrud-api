
# Game Store - Api

Api que simula uma Game Store.


## Stack utilizada

**Back-end:** Node, Express, Sequelize, Mysql2, Body-parser e Dotenv.
**Database:** Mysql.


## Funcionalidades

- Cadastro de games
- Edição de games cadastrado
- Leitura de informações cadastradas
- Deleção de games


## Clonando repositório

```bash
  git clone https://github.com/Alexsandro-ms/gamesCrud-api
```

## Instalação

Instale as dependências de gamesCrud-api com npm ou yarn

```bash
  cd gamesCrud-api
  npm install ## yarn
```

## Criação de um Schema no mysql

Crie um novo Schema do mysql, necessário para a prosseguir com o funcionamento da aplicação

    
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DATABASE_NAME`

`DATABASE_USERNAME`

`DATABASE_USERPASSWORD`


## Documentação da API

#### Retorna todos os itens

```http
  GET /games
```

#### Retorna um item

```http
  GET /game/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |


#### Cadastro de um novo item

```http
  POST /game
```

| Corpo   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Obrigatório**. O nome do game a ser cadastrado |
| `year`      | `integer` | **Obrigatório**. O ano do game a ser cadastrado |
| `price`      | `string` | **Obrigatório**. O valor do game a ser cadastrado |


#### Deleção de um item

```http
  DELETE /game/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O id do game a ser deletado |

#### Edição de um item

```http
  PUT /game/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O id do game a ser editado |

#### Só é necessário enviar as informações que deseja alterar

| Corpo   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Opcional**. O nome do game a ser editado |
| `year`      | `integer` | **Opcional**. O ano do game a ser editado |
| `price`      | `string` | **Opcional**. O valor do game a ser editado |

## Licença

[MIT](https://choosealicense.com/licenses/mit/)


## Autores

- [@alexsandro-ms](https://www.github.com/alexsandro-ms)

