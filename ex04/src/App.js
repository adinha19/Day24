import React, { Component } from 'react';

class App extends Component {

  setLocalStorage = () => {
    localStorage.setItem('Arena', 'Selection Month');
  };

  getLocalStorage = () => {
    const myLocalStorageData = localStorage.getItem('Arena');
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.setLocalStorage}>setLocalStorage</button>
        <button onClick={this.getLocalStorage}>getLocalStorage</button>
      </div>
    )
  };

};

export default App;