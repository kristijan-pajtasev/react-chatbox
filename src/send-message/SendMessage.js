import React, { Component } from 'react';
import './send-message.css';

class SendMessage extends Component {
    render() {
        return (
            <div className="send-message">
                <textarea></textarea>
                <button>Send Message</button>
            </div>
        );
    }
}

export default SendMessage;
