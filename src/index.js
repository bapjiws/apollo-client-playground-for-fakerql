import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider, Query } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import fetch from 'node-fetch';

const client = new ApolloClient({
  link: ApolloLink.from([new HttpLink({uri: 'https://fakerql.com/graphql', fetch})]),
  cache: new InMemoryCache()
});

const Users = () => (
  <Query
	query={gql`
	  query Users {
		allUsers(count: 1) {
		  id
		  firstName
		  lastName
		}
	  }
	`}
  >
	{({ loading, error, data }) => {
	  if (loading) return <p>Loading...</p>;
	  if (error) return <p>Error :(</p>;

	  return data.allUsers.map(({ id, firstName, lastName }) => (
	  <div key={id}>
	    <p>{firstName} {lastName}</p>
	  </div>
	  ));
	}}
  </Query>
);

const App = () => (
  <ApolloProvider client={client}>
	<div>
	  <h2>My cool Apollo app! 🚀</h2>
	  <Users/>
	</div>
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));

module.hot.accept();

