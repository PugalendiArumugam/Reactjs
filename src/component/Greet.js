import React, { Component } from 'react';

class Greet extends Component {
    render() {
        const {firstname, lastname} =  this.props;
        return (
            <div>
                <h3>Hello  {lastname} {firstname}</h3>
            </div>
        );
    }
}

export default Greet;
