import { ApolloServer, gql } from 'apollo-server'

const usuarios = [
    {
        id: 1,
        nome: "Joao Silva",
        email: "jsilva@zemail.com",
        idade: 22
    }, {
        id: 2,
        nome: "Maria da silva",
        email: "Msilva@zemail.com",
        idade: 23
    }, {
        id: 3,
        nome: "Jose Silva",
        email: "josilva@zemail.com",
        idade: 44
    }
]

const typeDefs = gql`
    scalar Date

    type Usuario {
        id: ID
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean        
    }

    type Produto {        
        nome: String!
        preco: Float!
        desconto: Float
        preco_com_desconto: Float                
    }

    type Query {
        ola: String
        hora_certa: Date
        usuario_logado: Usuario
        produto_em_destaque: Produto
        numeros_mega_sena: [Int!]!
        usuarios: [Usuario]
    }`

const resolvers = {
    Usuario: {
        salario(usuario) {
            return usuario.salario_real
        },
    },
    Produto: {
        preco_com_desconto(produto) {
            return produto.preco * (1 - produto.desconto)
        },
    },
    Query: {
        ola() {
            return "Hello World"
        },
        hora_certa() {
            return new Date()
        },
        usuario_logado() {
            return {
                id: 1,
                nome: "Junior Santos",
                email: "junior_santos@outlook.com",
                idade: 23,
                salario_real: (Math.random() * 1000).toFixed(2),
                vip: true
            }
        },
        produto_em_destaque() {
            return {
                nome: "Coca Cola",
                preco: 10,
                desconto: 0.2
            }
        },
        numeros_mega_sena() {
            const ordernaCrecentemente = (a, b) => (a - b)
            const removeItemsDuplicados = (item, index, array) => { return array.indexOf(item) == index }
            return Array(6)
                .fill(0)
                .map(() => parseInt(Math.random() * 60 + 1))
                .filter(removeItemsDuplicados)
                .sort(ordernaCrecentemente)
        },
        usuarios() {
            return usuarios
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})

