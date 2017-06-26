import React, { Component } from 'react';
import './App.less';
import ChatApp from "./ChatApp";
import { Provider } from "react-redux";

import store from "./store";

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
