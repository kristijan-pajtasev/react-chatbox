import React from 'react';
import './Login.less';

class Login extends React.PureComponent {
    constructor() {
        super();
        this.state = { username: '' };
    }

    handleChange(event) {
        this.setState({username: event.target.value});
    }

    login() {
        console.log(`login username: ${this.state.username}`);
    }

    render(){
        return (
            <div className="LoginComponent">
                <input className="username"
                       placeholder="Enter username"
                       type="text" value={this.state.username}
                       onChange={this.handleChange.bind(this)} />

                <button onClick={this.login.bind(this)}>Login</button>
            </div>);
    }
}
export default Login;