import React, { PureComponent } from 'react';
import "./MessagesList.less";
import Message from "./Message";

class Messages extends PureComponent  {
    render() {
        const { messages } = this.props;
        return (
            <div className="messages-list">
                <ul>
                    {messages.map( (m, i) => (<Message key={"message" + i} message={m} />) )}
                </ul>
            </div>
        );
    }
}


export default Messages;