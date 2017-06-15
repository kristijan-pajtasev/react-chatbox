import React, { PureComponent} from 'react';
import PropTypes from "prop-types";
import './send-message.css';

class SendMessage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        this.sendMessage = this.sendMessage.bind(this);
    }
    sendMessage() {
        console.log(`handle ${this.message.value}`);
    }
    render() {
        const { sendMessage } = this.props;
        return (
            <div className="send-message">
                <textarea
                    ref={(msg) => { this.message = msg; }}></textarea>
                <button onClick={sendMessage}>Send Message</button>
            </div>
        );
    }
}

SendMessage.saveMessage = {
    optionalFunc: PropTypes.func.isRequired,
}

export default SendMessage;
