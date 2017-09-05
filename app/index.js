import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { createNetworkInterface } from 'apollo-client';

import { TOKEN } from '../config.json';

import Root from './router';

export default class App extends Component {
  render() {
    const networkInterface = createNetworkInterface({
      uri: 'https://api.github.com/graphql',
    });
    networkInterface.use([{
      applyMiddleware(req, next) {
        if (!req.options.headers) {
          req.options.headers = {
            authorization: TOKEN,
          };
          next();
        }
      }
    }]);
    const client = new ApolloClient({
      networkInterface
    });
    return (
      <ApolloProvider client={client}>
        <Root />
      </ApolloProvider>
    )
  }
};
