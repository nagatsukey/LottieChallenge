
import React, { Component } from 'react'
import { render } from 'react-dom'
import RootComponent from './components/RootComponent'

export default class App extends Component {
  render() {
    return (
      <RootComponent />
    );
  }
}

render(<App />, document.getElementById('app'))
