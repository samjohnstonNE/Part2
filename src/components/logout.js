import React from 'react';

/**
 * Generates button for logout function
 *
 * Logout text is hardcoded
 *
 * @author Sam Johnston
 * @id W17004648
 */

class Logout extends React.Component {

    render() {


        return (
                <button onClick={this.props.handleLogoutClick}>Logout</button>
        );
    }
}

export default Logout;
