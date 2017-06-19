import React, { PureComponent} from 'react';
import PropTypes from "prop-types";
import './send-message.css';

class SendMessage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    sendMessage() {
        this.props.sendMessage(this.message.value);
        this.setState({ message: "" })
        this.message.value = ""
    }
    render() {
        return (
            <div className="send-message">
                <textarea
                    ref={(msg) => { this.message = msg; }}></textarea>
                <button onClick={this.sendMessage.bind(this)}>Send Message</button>
            </div>
        );
    }
}

SendMessage.saveMessage = {
    optionalFunc: PropTypes.func.isRequired,
}

export default SendMessage;
