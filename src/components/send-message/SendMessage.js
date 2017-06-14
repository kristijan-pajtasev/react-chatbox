import React, { Component } from 'react';
import './send-message.css';

class SendMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.sendMessage = this.sendMessage.bind(this);
    }
    sendMessage() {
        console.log(`handle ${this.message.value}`);
    }
    render() {
        return (
            <div className="send-message">
                <textarea
                    ref={(msg) => { console.log("inp"); this.message = msg; }}></textarea>
                <button onClick={this.sendMessage}>Send Message</button>
            </div>
        );
    }
}

export default SendMessage;
