import React from "react";
import MessagesList from './messages/MessagesList';
import SendMessage from './send-message/SendMessage';
import MessagesService from "../services/MessagesService";
import SocketService from '../services/SocketService';
import config from '../config';

class ChatApp extends React.PureComponent {
    constructor(props) {
        super(props);
        MessagesService.setApiHost(config.api);
        MessagesService.fetchMessages();
        new SocketService(config.ws);
    }

    render() {
        return (
            <div className="App">
                <MessagesList messages={this.props.messages} />
                <SendMessage sendMessage={MessagesService.sendMessage.bind(MessagesService)} />
            </div>);
    }
}

export default ChatApp;