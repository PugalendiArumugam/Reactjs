import React, { Component } from 'react';

class Message extends Component {
    toggleMessage = true

    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeMessage() {
        if (this.toggleMessage) {
            this.setState({
                message: 'Thanks for Subscribing :)'
            })
            this.toggleMessage=!this.toggleMessage;
        } else {
            this.setState({
                message: 'Welcome visitor'
            })
            this.toggleMessage=!this.toggleMessage;
        }
    }

    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        );
    }
}

export default Message;
