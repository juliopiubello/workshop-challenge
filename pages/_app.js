import { ApolloProvider } from "@apollo/client";
import { Auth0Provider } from "@auth0/auth0-react";
import client from "../apollo-client";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="dev-o5w1femw.us.auth0.com"
      clientId="YKXeX8jk09c2ziZ0fF1xk7hp7U7gnvEW"
      redirectUri={typeof window !== 'undefined' && window.location.origin}
      audience="https://lenient-swine-87.hasura.app/v1/graphql"
    >
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Auth0Provider>
  );
}

export default MyApp
