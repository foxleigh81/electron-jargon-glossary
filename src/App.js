import React, { Component } from 'react'
import JargonList from './components/jargon-list'
import data from './data'
import SiteHeader from './components/site-header'

// Import styles
import AppStyles from './styles'

class App extends Component {
  render() {
    return (
      <AppStyles>
        <div className="App">
          <SiteHeader />
          <JargonList data={data} />
        </div>
      </AppStyles>
    );
  }
}

export default App;
