import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import';
import resolvers from './resolvers';

const schemaPath = './schema/index.graphql';

const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers,
});

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`);
});
