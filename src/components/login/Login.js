import React from 'react';
import './Login.less';

class Login extends React.PureComponent {
    render(){
        return (
            <div className="LoginComponent">
                <input type="text" />
                <button>Login</button>
            </div>);
    }
}
export default Login;