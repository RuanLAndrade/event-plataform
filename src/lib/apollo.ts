import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q2v2dy2qyp01z4hhe841cq/master',
  cache: new InMemoryCache()
})