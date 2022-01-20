import React from "react";

/**
 * Renders the paper id
 *
 * Creates the html tags for the paper id to be displayed
 *
 * @author Sam Johnston
 * @id W17004648
 */

class Saved extends React.Component {

    render() {

        return(
            <div>
                <p> {this.props.list.paper_id} </p>
            </div>
        )
    }
}

export default Saved;