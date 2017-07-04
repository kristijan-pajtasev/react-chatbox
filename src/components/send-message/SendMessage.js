import React, { PureComponent} from 'react';
import PropTypes from "prop-types";
import './send-message.less';

class SendMessage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    sendMessage() {
        this.props.sendMessage(this.state.message);
        this.setState({ message: "" })
    }
    handleChange(event) {
        this.setState({message: event.target.value});
    }
    handleKeyPress(event) {
        if(event.key === 'Enter'){
            this.sendMessage();
            event.preventDefault();
        }
    }
    render() {
        return (
            <div className="send-message">
                <textarea
                    onKeyPress={::this.handleKeyPress}
                    onChange={::this.handleChange} value={this.state.message}/>
            </div>
        );
    }
}

SendMessage.saveMessage = {
    optionalFunc: PropTypes.func.isRequired,
};

export default SendMessage;
