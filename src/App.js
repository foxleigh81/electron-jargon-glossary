// Import dependencies
import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components';

// Import components
import JargonList from './components/jargon-list'
import SiteHeader from './components/site-header'

// Import data
import data from './data'

// Import styles
import { theme } from './theme/globalStyles'
import AppStyles from './styles'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppStyles>
          <div className="App">
            <SiteHeader />
            <JargonList data={data} />
          </div>
        </AppStyles>
      </ThemeProvider>
    );
  }
}

export default App;
