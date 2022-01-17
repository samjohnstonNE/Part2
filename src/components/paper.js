import React from "react";
import Authorscontent from "./authorscontent";

/**
 * Displays Paper information
 *
 * @author Sam Johnston
 * @id W17004648
 * @date 16/01/2022
 * @time 16:00
 *
 * paper.paper_id passed down from Papers
 *
 */

class Paper extends React.Component {

    constructor(props) {
        super(props)
        this.state = { display: false }
    }

    handleClick = () => {
        this.setState({display:!this.state.display})
    }

    /**
     * Renders paper titles
     * calls AuthorContent
     * Details hidden by default
     *
     * @return {JSX.Element}
     */
    render() {
        let details = "";

        if (this.state.display) {

            details =
                <div className="info">
                    <p>{this.props.paper.abstract}</p>
                    <Authorscontent paper_id={this.props.paper.paper_id} />
                </div>
        }

        return(

            <div>
                <p onClick={this.handleClick}> {this.props.paper.title} </p>
                {details}
            </div>
        )
    }
}

export default Paper;
