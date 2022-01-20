import React from "react";

/**
 * Displays author first and last name
 *
 * props.author is passed down from AuthorContent class
 *
 * @author Sam Johnston
 * @id W17004648
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
