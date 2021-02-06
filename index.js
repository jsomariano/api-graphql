const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    # Pontos de entrada da API!
    type Query {
        hora_certa: String
    }

    `

const resolvers = {
    Query: {
        hora_certa() {
            return String(new Date())
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

