import React from 'react';

/**
 * Generates Login function
 *
 * @author Sam Johnston
 * @id W17004648
 * @date 16/01/2022
 * @time 16:00
 *
 * Passed down:
 * props.email
 * props.handleEmail
 * props.password
 * props.handlePassword
 * props.handleLoginClick
 *
 */

class Login extends React.Component {

    /**
     * Displays HTML Input and Button tags
     *
     * @return {JSX.Element}
     */
    render() {
        return (
            <div className="App-header">
                <input
                    type='text'
                    placeholder='email'
                    value={this.props.email}
                    onChange={this.props.handleEmail}
                />
                <input
                    type='password'
                    placeholder='password'
                    value={this.props.password}
                    onChange={this.props.handlePassword}
                />
                <button onClick={this.props.handleLoginClick}>Login</button>
            </div>
        );
    }
}

export default Login;
