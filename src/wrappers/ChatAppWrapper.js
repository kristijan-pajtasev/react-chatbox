import React from "react";
import ChatApp from '../components/ChatApp'
import { connect } from "react-redux";
import { sendMessage } from '../actions';
import { bindActionCreators } from 'redux'

class ChatAppWrapper extends React.PureComponent {
    render() {
        return (
            <ChatApp messages={this.props.messages} sendMessage={this.props.actions.sendMessage} />);
    }
}

function mapStateToProps(state) {
    return { messages: state.messages, user: state.user };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({ sendMessage }, dispatch) }
}

export default connect( mapStateToProps, mapDispatchToProps )(ChatAppWrapper);