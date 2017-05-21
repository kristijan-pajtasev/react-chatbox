import React, { Component } from 'react';

export default class Messages extends Component {

    constructor() {
        super();
        this.state = {
            messages: "item",
        };
    }

    render() {
        return (
            <div className="messages">
                <h1>{this.messages}</h1>
            </div>
        );
    }
}
