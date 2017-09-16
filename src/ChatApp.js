import React from "react";
import MessagesContainer from './components/messages/MessagesListContainer';
import SendMessage from './components/send-message/SendMessage';
import MessagesService from "./services/MessagesService";
import SocketService from './services/SocketService';

class ChatApp extends React.PureComponent {
    constructor() {
        super();
        new SocketService();
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