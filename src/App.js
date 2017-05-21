import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './messages/Messages';
import SendMessage from './send-message/SendMessage';

class App extends Component {
  render() {
    return (
      <div className="App">
          <SendMessage />
      </div>
    );
  }
}

export default App;
