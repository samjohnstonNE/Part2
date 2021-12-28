import React from "react";
//import AwardContent from "./awardcontent";

class Paper extends React.Component {

    constructor(props) {
        super(props)
        this.state = { display: false }
    }

    handleClick = () => {
        this.setState({display:!this.state.display})
    }

    /*
    componentDidMount() {
        let url = "http://unn-w17004648.newnumyspace.co.uk/kf6012/coursework/part1/api/papers?award=all"

        if (this.props.actorid !== undefined) {
            url += "?actor_id=" + this.props.actorid
        }

        fetch(url)
            .then( (response) => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    throw Error(response.statusText);
                }
            })
            .then( (data) => {
                this.setState({results:data.results})
            })
            .catch ((err) => {
                console.log("something went wrong ", err)
            });
    }

    filterByAward = (paper) => {
        return ((paper.award === this.props.award) || (this.props.award === ""))
    }
     */

    render() {
        let details = "";

        /*
        let filteredResults = this.state.results

        if (this.props.award !== undefined) {
            filteredResults = filteredResults.filter(this.filterByAward)
        }
         */

        if (this.state.display) {

            details =
                <div className="info">
                    <p>{this.props.paper.abstract}</p>
                </div>
        }

        // {filteredResults.map((award, i) => (<AwardContent key={award.name} award={award} />))}
        return(

            <div>
                <p onClick={this.handleClick}>{this.props.paper.title}</p>
                {details}
            </div>
        )
    }
}

export default Paper;
