import React from "react";

/**
 * Displays author first and last name
 *
 * @author Sam Johnston
 * @id W17004648
 * @date 16/01/2022
 * @time 16:00
 *
 * props.author passed down from Authors Content
 *
 */

class AuthorsNames extends React.Component {

    render() {

        return (

            <div>
                <p>{this.props.author.first_name} {this.props.author.last_name}</p>
            </div>

        )
    }
}

export default AuthorsNames;
