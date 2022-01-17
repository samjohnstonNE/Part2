import React from "react";
import PapersContent from "./paperscontent";

/**
 * Author JSX tags
 * Details hidden by default
 *
 * @author Sam Johnston
 * @id W17004648
 * @date 16/01/2022
 * @time 16:00
 *
 * author.author_id passed down from Authors
 *
 */

class Author extends React.Component {

    constructor(props) {
        super(props)
        this.state = { display: false }
    }

    /**
     *  Change display state when object is clicked
     */
    handleClick = () => {
        this.setState({display:!this.state.display})
    }

    /**
     * Render author info
     * Call Papers content component
     * when name onClick state changes
     *
     * @var details
     *
     * @return {JSX.Element}
     */
    render() {
        let details = "";

        if (this.state.display) {

            details =
                <div className="info">
                    <PapersContent author_id={this.props.author.author_id} />
                </div>
        }

        return(
            <div>
                <p onClick={this.handleClick}>{this.props.author.first_name} {this.props.author.last_name}</p>
                {details}
            </div>
        )
    }
}

export default Author;
