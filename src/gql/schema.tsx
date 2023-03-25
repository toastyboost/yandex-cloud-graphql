import { gql, IResolvers } from '.'

export const typeDefs = gql`
  type Query {
    hello(arg: String): [String]
  }
`

export const resolvers: IResolvers = {
  Query: {
    hello: async (parent, args): Promise<string[]> => {
      return []
    },
  },
}
