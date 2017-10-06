import React from "react";

import MessagesList from './messages/MessagesList';
import SendMessage from './send-message/SendMessage';
import LoginComponent from './login/Login';

import MessagesService from "../services/MessagesService";
import LoginService from "../services/LoginService";
import SocketService from '../services/SocketService';

import config from '../config';

class ChatApp extends React.PureComponent {
    constructor(props) {
        super(props);
        MessagesService.setApiHost(config.api);
        LoginService.setApiHost(config.api);
        this.state = { isLoggedChecked: false };
        props.isLoggedIn().then(() => {
            this.setState({ isLoggedChecked: true});
        });
    }

    componentWillReceiveProps(nextProps) {
        if((!this.props.user && nextProps.user &&
            nextProps.user.username) ||
            (this.props.user && nextProps.user && this.props.user.username !== nextProps.user.username)) {
            MessagesService.fetchMessages();
            new SocketService(config.ws);
        }
    }

    componentDidMount() {
        console.log('component did mount');
    }

    render() {
        if(!this.state.isLoggedChecked) return null;

        if(!this.props.user || !this.props.user.username) {
            return (
                <div className="App">
                    <LoginComponent login={this.props.login} />
                </div>)
        }

        return (
            <div className="App">
                <MessagesList messages={this.props.messages} />
                <SendMessage sendMessage={this.props.sendMessage} />
            </div>);
    }
}

export default ChatApp;