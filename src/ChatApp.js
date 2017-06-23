import React from "react";
import Messages from './components/messages/Messages';
import SendMessage from './components/send-message/SendMessage';
import MessagesService from "./services/MessagesService";

class ChatApp extends React.PureComponent {
    render() {
        return (
            <div className="App">
                <Messages />
                <SendMessage sendMessage={MessagesService.sendMessage} />
            </div>);
    }
}

export default ChatApp;