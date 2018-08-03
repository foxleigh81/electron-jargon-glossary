// Import dependencies
import React, { Component } from 'react'
import { ApolloProvider, Query } from "react-apollo";
import { ThemeProvider } from 'styled-components';
import ApolloClient from "apollo-boost";

// Import components
import JargonList from '../jargon-list'
import SiteHeader from '../site-header'

// Import styles
import { theme } from '../../theme/globalStyles'
import AppStyles from './styles'

// Connect to GraphQL
const client = new ApolloClient({
  uri: "http://localhost:3000"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <AppStyles>
            <div className="App">
              <SiteHeader />
              <JargonList />
            </div>
          </AppStyles>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
