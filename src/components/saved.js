import React from "react";

/**
 * Renders Paper ID
 *
 * @author Sam Johnston
 * @id W17004648
 * @date 16/01/2022
 * @time 16:00
 *
 * list.paper_id passed down from SavedList
 *
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