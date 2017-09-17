import React, { Component } from 'react';
import './App.less';
import ChatAppWrapper from "./wrappers/ChatAppWrapper";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <ChatAppWrapper />
      </Provider>
    );
  }
}

export default App;
