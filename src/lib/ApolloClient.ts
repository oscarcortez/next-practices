import { HttpLink } from '@apollo/client';
import { registerApolloClient, ApolloClient, InMemoryCache } from '@apollo/experimental-nextjs-app-support';

// console.log('process.env.PUBLIC_GRAPHQL_ENDPOINT 2', process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT);

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    }),
    // uri: process.env.PUBLIC_GRAPHQL_ENDPOINT,
  });
});
