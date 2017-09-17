import React from "react";
import ChatApp from '../components/ChatApp'
import { connect } from "react-redux";
import { sendMessage } from '../actions';
import { bindActionCreators } from 'redux'

class ChatAppWrapper extends React.PureComponent {
    render() {
        return (
            <ChatApp messages={this.props.messages} saveMessage={this.props.actions.saveMessage} />);
    }
}

function mapStateToProps(state) {
    return { messages: state };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({ sendMessage }, dispatch) }
}

export default connect( mapStateToProps, mapDispatchToProps )(ChatAppWrapper);