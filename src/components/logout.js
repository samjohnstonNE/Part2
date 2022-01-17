import React from 'react';

/**
 * Generates Logout function
 *
 * @author Sam Johnston
 * @id W17004648
 * @date 16/01/2022
 * @time 16:00
 *
 * Passed down:
 * props.handleLogoutClick
 *
 */

class Logout extends React.Component {

    /**
     * Displays Button tag
     * @return {JSX.Element}
     */
    render() {

        return (
            <div className="App-header">
                <button onClick={this.props.handleLogoutClick}>Logout</button>
            </div>
        );
    }
}

export default Logout;
