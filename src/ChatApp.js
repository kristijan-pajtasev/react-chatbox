import React from "react";
import MessagesContainer from './components/messages/MessagesListContainer';
import SendMessage from './components/send-message/SendMessage';
import MessagesService from "./services/MessagesService";

class ChatApp extends React.PureComponent {
    constructor() {
        super();
        var s = new WebSocket('ws://127.0.0.1:8080', 'echo-protocol');
        s.onmessage = function(e) {
            console.log(`message received: ${e.data}`);
        }
    }

    render() {
        return (
            <div className="App">
                <MessagesContainer />
                <SendMessage sendMessage={MessagesService.sendMessage} />
            </div>);
    }
}

export default ChatApp;