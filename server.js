import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import fetch from 'node-fetch';
import { consoleLink } from 'apollo-link-log-query';

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: ApolloLink.from([consoleLink, new HttpLink({uri: 'https://fakerql.com/graphql', fetch})]),
  cache
});

client.query({query: gql`
  query Users {
	allUsers(count: 1) {
	  id
	  firstName
	  lastName
	}
  }
`})
  .then(data => console.log(data))
  .catch(error => console.error(error));