import React, { Component } from 'react';
import "./Messages.less";

class Messages extends Component {
    render() {
        const { message } = this.props;
        return (
            <li className="message">
                <div className="sender">{message.from}:</div>
                <div>{message.message}</div>
            </li>
        );
    }
}

export default Messages;