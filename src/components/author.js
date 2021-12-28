import React from "react";


class Author extends React.Component {

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
                    <p>{this.props.author.middle_name}</p>
                </div>
        }

        // {filteredResults.map((award, i) => (<AwardContent key={award.name} award={award} />))}
        return(

            <div>
                <p onClick={this.handleClick}>{this.props.author.first_name} {this.props.author.last_name}</p>
                {details}
            </div>
        )
    }
}

export default Author;
