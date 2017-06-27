import React, { Component } from 'react';
import { connect } from "react-redux";
import "./MessagesList.less";

class Messages extends Component {
    render() {
        const { messages } = this.props;
        return (
            <div className="messages-list">
                <ul>
                    {messages.map( (m, i) => (<li key={"message" + i}>{m}</li>) )}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { messages: state };
}

export default connect( mapStateToProps )(Messages);