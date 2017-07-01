import React, { Component } from 'react';
import { connect } from "react-redux";
import "./MessagesList.less";
import Message from "./Message";

class Messages extends Component {
    render() {
        const { messages } = this.props;
        return (
            <div className="messages-list">
                <ul>
                    {messages.map( (m, i) => (<Message key={"message" + i} message={m} />) )}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { messages: state };
}

export default connect( mapStateToProps )(Messages);