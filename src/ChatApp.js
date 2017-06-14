import React from "react";
import Messages from './components/messages/Messages';
import SendMessage from './components/send-message/SendMessage';

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