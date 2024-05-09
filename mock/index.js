import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { addMocksToSchema } from '@graphql-tools/mock'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { faker } from '@faker-js/faker/locale/zh_CN'

const typeDefs = `#graphql
  type UserType {
    id: String!
    name: String!
    desc: String!

    """账户信息"""
    account: String!
  }

  type Query {
    """使用ID查询用户"""
    Find(id: String!): UserType!

    """更新用户"""
    update(id: String!, params: UserInput!): Boolean!

    """删除用户"""
    del(id: String!): Boolean!
  }

  input UserInput {
    name: String!
    desc: String!
  }

  type Mutation {
    """新增用户"""
    create(param: UserInput!): Boolean!
  }
`

const resolvers = {
  UserType: {
    name: () => faker.person.fullName(),
  },
}

const mocks = {
  Int: () => 6,
  Float: () => 22.1,
  String: () => faker.company.name(),
}

const server = new ApolloServer({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    mocks,
    preserveResolvers: true,
  }),
})

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } })

console.log(`🚀 Server listening at: ${url}`)
