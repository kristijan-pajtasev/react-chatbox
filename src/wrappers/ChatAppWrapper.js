import React from "react";
import ChatApp from '../components/ChatApp'
import { connect } from "react-redux";
import { saveMessage } from '../actions';
import { bindActionCreators } from 'redux'

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

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({ saveMessage }, dispatch) }
}

export default connect( mapStateToProps, mapDispatchToProps )(ChatAppWrapper);