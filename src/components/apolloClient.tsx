import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://your-graphql-api.com/graphql', // Replace with your actual GraphQL endpoint
  cache: new InMemoryCache(),
});
