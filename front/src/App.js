import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    count: 0
  }

  fetchCount = async () => {
    const req = await fetch('api/count');
    const res = await req.json();
    this.setState(res);
  }



  componentDidMount() {
    this.fetchCount();
  }

  render() {
    return (
      <div className="app">
        <div className="counter">
          {this.state.count}
        </div>
        <button onClick={this.fetchCount}>
          update counter
        </button>
      </div>
    );
  }
}

export default App;
