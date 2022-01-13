import React from "react";
import PaperT from "./papert.js";

class ReadingTitles extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            results : [],
            page: 1
        }
    }

    componentDidMount() {
        let url = "http://unn-w17004648.newnumyspace.co.uk/kf6012/coursework/part1/api/papers?reading"

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

    render() {

        return (
            <div>
                {this.state.results.map( (paper, i) => (<PaperT key={this.props.paper_id} paper={paper} />) )}
            </div>
        )
    }
}

export default ReadingTitles;
