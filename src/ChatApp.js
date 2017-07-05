import React from "react";
import MessagesContainer from './components/messages/MessagesListContainer';
import SendMessage from './components/send-message/SendMessage';
import MessagesService from "./services/MessagesService";

class ChatApp extends React.PureComponent {
    render() {
        return (
            <div className="App">
                <MessagesContainer />
                <SendMessage sendMessage={MessagesService.sendMessage} />
            </div>);
    }
}

export default ChatApp;