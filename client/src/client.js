import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import Auth from './utils/auth'

let URL;
if (process.env.REACT_APP_IS_DEV) 
  URL =  "http://localhost:3001/graphql";
else URL = "/graphql"

const createClient = (token) => {
  const httpLink = createHttpLink({
    uri: URL,
  });
  let authLink;

  if (token) {
   authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });

  }

  return new ApolloClient({
    link: token ? authLink.concat(httpLink) : httpLink,
    cache: new InMemoryCache()
  });

}

const token = Auth.loggedIn() && Auth.getToken();
let client = createClient(token) 

export { client };
