import React from 'react';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Users from './components/Users';
import AddUserForm from './components/AddUserForm';

const client = new ApolloClient({
  uri: 'https://your-graphql-api.com/graphql', // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Users />
        <br /> <br />
        <AddUserForm />
      </div>
    </ApolloProvider>
  );
}

export default App;
