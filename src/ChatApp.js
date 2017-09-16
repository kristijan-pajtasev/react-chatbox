import React from "react";
import MessagesContainer from './components/messages/MessagesListContainer';
import SendMessage from './components/send-message/SendMessage';
import MessagesService from "./services/MessagesService";
import SocketService from './services/SocketService';
import config from './config';

class ChatApp extends React.PureComponent {
    constructor() {
        super();
        MessagesService.setApiHost(config.api);
        MessagesService.fetchMessages();
        new SocketService(config.ws);
    }

    render() {
        return (
            <div className="App">
                <MessagesContainer />
                <SendMessage sendMessage={MessagesService.sendMessage.bind(MessagesService)} />
            </div>);
    }
}

export default ChatApp;