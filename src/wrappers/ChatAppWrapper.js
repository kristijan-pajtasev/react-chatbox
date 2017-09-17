import React from "react";
import ChatApp from '../components/ChatApp'
import { connect } from "react-redux";

class ChatAppWrapper extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ChatApp messages={this.props.messages} />);
    }
}

function mapStateToProps(state) {
    return { messages: state };
}

export default connect( mapStateToProps )(ChatAppWrapper);