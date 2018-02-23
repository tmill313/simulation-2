import React, { Component } from 'react';
import logo from './logo.svg';
import './Components/Style.css';
import routes from './routes';
<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
</style>

class App extends Component {
  render() {
    return (
      <div className="main-container">
        {routes}
        </div>
    )
  }
}

export default App;
