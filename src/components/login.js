import React from 'react';

/**
 * Generates input for login function
 *
 * two input tags are generate for the username and password
 * a button is also included to submit the credentials
 *
 * @author Sam Johnston
 * @id W17004648
 */

class Login extends React.Component {


    render() {
        return (
            <div className="App-header">
                <input
                    type='text'
                    placeholder='Email'
                    value={this.props.email}
                    onChange={this.props.handleEmail}
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={this.props.password}
                    onChange={this.props.handlePassword}
                />
                <button onClick={this.props.handleLoginClick}>Login</button>
            </div>
        );
    }
}

export default Login;
