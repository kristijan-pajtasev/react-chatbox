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
        this.props.login(this.state.username);
    }

    handleKeyPress(event) {
        if(event.key === 'Enter'){
            this.login();
        }
    }

    render(){
        return (
            <div className="LoginComponent">
                <input className="username"
                       placeholder="Enter username"
                       type="text" value={this.state.username}
                       onKeyPress={::this.handleKeyPress}
                       onChange={this.handleChange.bind(this)} />

                <button onClick={this.login.bind(this)}>Login</button>
            </div>);
    }
}
export default Login;