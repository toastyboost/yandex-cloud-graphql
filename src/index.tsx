import { ApolloServer, typeDefs, resolvers } from './gql'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: process.env.GRAPHQL_ENDPOINT || '',
  },
})

export const graphqlHandler = server.createHandler()
