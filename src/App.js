import React, { Component } from 'react';
import './App.css';
import ChatApp from "./ChatApp";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore((state = [], action) => {
  console.log("store");
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <ChatApp />
      </Provider>
    );
  }
}

export default App;
