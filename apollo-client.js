import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://lenient-swine-87.hasura.app/v1/graphql',
});

const authLink = setContext((_, { headers }) => {
  let customHeader = {};

  if ( typeof localStorage !== 'undefined'
  && localStorage.getItem('token') ) {
    customHeader.authorization = `Bearer ${localStorage.getItem('token')}`;
  } else {
    customHeader.role = 'anonymous';
  }
  
  return {
    headers: {
      ...headers,
      ...customHeader
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;