import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  //定义服务端graphql的地址
  uri: 'http://localhost:3000/graphql',
  //定义缓存
  cache: new InMemoryCache()
})