import React, { Component } from 'react';
import { connect } from "react-redux";
import MessagesList from "./MessagesList";

class MessagesListContainer extends Component {
    render() {
        const { messages } = this.props;
        return (
            <MessagesList messages={messages} />
        );
    }
}

function mapStateToProps(state) {
    return { messages: state };
}

export default connect( mapStateToProps )(MessagesListContainer);