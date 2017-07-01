import React, { Component } from 'react';
import { connect } from "react-redux";

class Messages extends Component {
    render() {
        const { message } = this.props;
        return (
            <li>{message}</li>
        );
    }
}

function mapStateToProps(state) {
    return { messages: state };
}

export default connect( mapStateToProps )(Messages);