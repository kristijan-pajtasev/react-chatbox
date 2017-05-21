import React, { Component } from 'react';
import './App.css';
import Messages from './messages/Messages';
import SendMessage from './send-message/SendMessage';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Messages />
          <SendMessage />
      </div>
    );
  }
}

export default App;
