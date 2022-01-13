import React from "react";
import ReadingTitles from "./readingtitles";

class Saved extends React.Component {

    constructor(props) {
        super(props)
        this.state = { display: false }
    }

    handleClick = () => {
        this.setState({display:!this.state.display})
    }


    render() {
        let details = "";

        if (this.state.display) {

            details =
                <div className="info">
                    <ReadingTitles paper_id={this.props.list.paper_id} />
                </div>
        }

        return(
            <div>
                <p onClick={this.handleClick}> {this.props.list.paper_id} </p>
                {details}
            </div>
        )
    }
}

export default Saved;