import React, { Component } from 'react';

export default class Messages extends Component {

    constructor() {
        super();
        this.state = {
            messages: [
                "test1",
                "test2",
                "test3"],
        };
    }

    render() {
        return (
            <div className="messages">
                <item>{this.state.messages}</item>
            </div>
        );
    }
}
