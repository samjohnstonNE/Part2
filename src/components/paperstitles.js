import React from "react";

/**
 * Renders Author first name, last name, paper title and abstract
 *
 * All props are passed down from the class above
 *
 * @author Sam Johnston
 * @id W17004648
 */

class PapersTitles extends React.Component {

    constructor(props) {
        super(props)
        this.state = { display: false }
    }


    render() {

        return (
            <div>
                <p>{this.props.paper.title}</p>
                <p>{this.props.paper.abstract}</p>
                <p>{this.props.paper.first_name} {this.props.paper.last_name}</p>
            </div>

        )
    }
}

export default PapersTitles;