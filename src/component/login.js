import React, { Component } from 'react';

class LoginForm extends Component {
    render() {
        return (
            <div>
                <h1>Login Form</h1> 
                <input required type="text" placeholder="User Name" /><br />
                <input required type="text" placeholder="email Id" /><br />
                <input required type="password" placeholder="Password" /><br />
                <button>Submit</button>
            </div>
        );
    }
}

export default LoginForm;
