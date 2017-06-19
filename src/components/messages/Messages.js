import React, { Component } from 'react';
import { connect } from "react-redux";

class Messages extends Component {
    render() {
        const { messages } = this.props;
        return (
            <div className="messages">
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