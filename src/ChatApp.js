import React from "react";
import Messages from './messages/Messages';
import SendMessage from './send-message/SendMessage';

class ChatApp extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
                <SendMessage />
                <Messages />
            </div>);
    }
}

export default ChatApp;