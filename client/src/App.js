import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './App.css';


import Layer from './components/Layer';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});


class App extends Component {
  render() {
    return (

      <ApolloProvider client={client}>
      <div>
        <Layer/>
      </div>
      </ApolloProvider>
    
  );
  }
}

export default App;
