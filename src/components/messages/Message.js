import React, { Component } from 'react';
import { connect } from "react-redux";
import "./Messages.less";

class Messages extends Component {
    render() {
        const { message } = this.props;
        return (
            <li className="message">{message}</li>
        );
    }
}

function mapStateToProps(state) {
    return { messages: state };
}

export default connect( mapStateToProps )(Messages);