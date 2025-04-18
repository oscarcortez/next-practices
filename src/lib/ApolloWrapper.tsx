'use client';

import { HttpLink } from '@apollo/client';
import { ApolloNextAppProvider, ApolloClient, InMemoryCache } from '@apollo/experimental-nextjs-app-support';

// console.log('process.env.PUBLIC_GRAPHQL_ENDPOINT 1', process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT);
const client = () => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    fetchOptions: { cache: 'no-store' },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
};

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloNextAppProvider makeClient={client}>{children}</ApolloNextAppProvider>;
}
