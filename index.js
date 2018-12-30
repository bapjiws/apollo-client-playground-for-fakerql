// ES6 version
// import { ApolloClient } from 'apollo-client';
// import { ApolloLink } from 'apollo-link';
// import { HttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import gql from 'graphql-tag';
// import fetch from 'node-fetch';
const { ApolloClient } = require('apollo-client');
const { ApolloLink } = require('apollo-link');
const { HttpLink } = require('apollo-link-http');
const { InMemoryCache } = require('apollo-cache-inmemory');
const gql = require('graphql-tag');
const fetch = require('node-fetch');

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: ApolloLink.from([new HttpLink({uri: 'https://fakerql.com/graphql', fetch})]),
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