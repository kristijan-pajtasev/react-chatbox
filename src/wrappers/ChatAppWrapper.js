import React from "react";
import ChatApp from '../components/ChatApp'
import { connect } from "react-redux";
import { sendMessage } from '../actions/messages';
import { login } from '../actions/login';
import { bindActionCreators } from 'redux'

class ChatAppWrapper extends React.PureComponent {
    render() {
        return (
            <ChatApp login={this.props.login}
                     messages={this.props.messages}
                     user={this.props.user}
                     sendMessage={this.props.actions.sendMessage} />);
    }
}

function mapStateToProps(state) {
    return { messages: state.messages, user: state.user };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({ sendMessage, login }, dispatch) }
}

export default connect( mapStateToProps, mapDispatchToProps )(ChatAppWrapper);