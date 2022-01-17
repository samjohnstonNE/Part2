import React from "react";

/**
 * Displays Author and Paper information
 *
 * @author Sam Johnston
 * @id W17004648
 * @date 16/01/2022
 * @time 16:00
 *
 * props.paper passed down from PapersContent
 *
 */

class PapersTitles extends React.Component {

    constructor(props) {
        super(props)
        this.state = { display: false }
    }

    /**
     * Information rendered in <p> tags
     *
     * @return {JSX.Element}
     */
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