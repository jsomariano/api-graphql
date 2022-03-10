# Introdução

Criação de projeto utilizando o framework GraphQL, o intuito do curso é aprender e conhecer a tecnologia.

# Como iniciar o projeto

Para iniciar o projeto basta seguir os seguintes comandos:

**Instalar depedências:**

```
$ yarn
``` 
ou  
 
```
$ npm install
```

**Iniciando projeto:**

```
$ yarn start
``` 
ou 

```
$ npm start
```

**Para executar as querys, basta acessar o endereço http://localhost:4000/**

# Exemplos

**Query**

Criando query para consultar usuario:
```gql
query {
    usuario(id: 1) {
        id
        nome
        email
        idade
        perfil {
            id
            nome
        }
        status
    }
}
```

Resposta:
```json
{
  "data": {
    "usuario": {
      "id": 1,
      "nome": "Joao Silva",
      "email": "joao@email.com",
      "idade": 22,
      "perfil": {
        "id": 1,
        "nome": "comum"
      },
      "status": "ATIVO"
    }
  }
}
```

**Fragment**

Criando query para consulta com fragment:
```gql
fragment usuarioCompleto on Usuario {
    id
    nome
    email
    idade
    perfil {
        id
        nome
    }
    status
}

query {
    usuario(id: 1) {
        ...usuarioCompleto
    }
}
```

Resposta:
```json
{
  "data": {
    "usuario": {
      "id": 1,
      "nome": "Joao Silva",
      "email": "joao@email.com",
      "idade": 22,
      "perfil": {
        "id": 1,
        "nome": "comum"
      },
      "status": "ATIVO"
    }
  }
}
```

**Mutation**

Criando usuario usando Mutation:
```gql
mutation {
    novoUsuario(
    	nome: "Ana"
    	email: "Ana@empresa.com"
    	idade: 34
  	) {
        id
        nome
        email
        status
    }
}
```

Resposta:
```json
{
  "data": {
    "novoUsuario": {
      "id": 7,
      "nome": "Ana",
      "email": "Ana@empresa.com",
      "status": "ATIVO"
    }
  }
}
```

Excluindo usuario usando Mutation:
```gql
mutation {
    excluirUsuario(id: 1) {
        id
        nome
    }
}
```

Resposta:
```json
{
  "data": {
    "excluirUsuario": {
      "id": 1,
      "nome": "Joao Silva"
    }
  }
}
```

Editando usuario e usando fragment para trazer atributos da resposta:
```gql
fragment usuarioCompleto on Usuario {
    id
    nome
    email
    idade
    perfil {
        id
        nome
    }
    status
}

mutation {
    alterarUsuario(
        id: 1
        nome: "junior Alterado"
        email: "junior@email.com"
        idade: 88
    ) {
        ...usuarioCompleto
    }
}
```

Resposta:
```json
{
  "data": {
    "alterarUsuario": {
      "id": 1,
      "nome": "junior Alterado",
      "email": "junior@email.com",
      "idade": 88,
      "perfil": {
        "id": 1,
        "nome": "comum"
      },
      "status": "ATIVO"
    }
  }
}
```

**Input**

Usando input para inserir um novo usuario:
```gql
fragment usuarioCompleto on Usuario {
    id
    nome
    email
    idade
    perfil {
        id
        nome
    }
    status
}

mutation {
    novoUsuario(
        dados: { 
            nome: "junior Santos", 
            email: "junior@gmail.com", 
            idade: 88 
        }
    ) {
        ...usuarioCompleto
    }
}
```

Resposta:
```json
{
  "data": {
    "novoUsuario": {
      "id": 5,
      "nome": "junior Santos",
      "email": "junior@gmail.com",
      "idade": 88,
      "perfil": {
        "id": 1,
        "nome": "comum"
      },
      "status": "ATIVO"
    }
  }
}
```

Usando input para fazer um filtro por e-mail e excluir um usuario:
```gql
mutation {
    excluirUsuario(filtro: { email: "joao@email.com" }) {
        id
        nome
        email
    }
}
```

resposta:
```json
{
  "data": {
    "excluirUsuario": {
      "id": 1,
      "nome": "Joao Silva",
      "email": "joao@email.com"
    }
  }
}
```

Usando input para fazer um filtro por id e excluir um usuario:
```gql
mutation {
    excluirUsuario(filtro: { id: 2 }) {
        id
        nome
        email
    }
}
```

Resposta: 
```json
{
  "data": {
    "excluirUsuario": {
      "id": 2,
      "nome": "Maria da silva",
      "email": "maria@email.com"
    }
  }
}
```

Usando input para filtro e para alterar usuario
```gql
mutation {
    alterarUsuario(
        filtro: { id: 1 }
        dados: { 
      		nome: "joao silva", 
      		email: "joao@email.com.br" 
      		idade: 30
    	}
    ) {
        id
        nome
        email
    }
}
```

Resposta:
```json
{
  "data": {
    "alterarUsuario": {
      "id": 1,
      "nome": "joao silva",
      "email": "joao@email.com.br"
    }
  }
}
```
