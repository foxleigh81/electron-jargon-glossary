import React, { Component } from 'react'
import JargonList from './components/jargon-list'
import data from './data'

// Import styles
import AppStyles from './styles'

class App extends Component {
  render() {
    return (
      <AppStyles>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Jargonnaloveit</h1>
          </header>
          <JargonList data={data} />
        </div>
      </AppStyles>
    );
  }
}

export default App;
