import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './App.css';


import MerchandiseList from './components/MerchandiseList';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});


class App extends Component {
  render() {
    return (

      <ApolloProvider client={client}>
      <div>
        <MerchandiseList/>
      </div>
      </ApolloProvider>
    
  );
  }
}

export default App;
