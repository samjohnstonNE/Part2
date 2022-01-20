import React from "react";
import Paper from "./paper";
import CheckBox from "./checkbox";

/**
 * Renders the paper information and creates checkboxes
 *
 * Checkboxes are linked using the paper id
 * both GET and POST requests are used to create this page
 * paper id is passed to the Paper class
 *
 * @author Sam Johnston
 * @id W17004648
 */

class ReadingList extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            results : [],
            readinglist : []
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

        url = "http://unn-w17004648.newnumyspace.co.uk/kf6012/coursework/part1/api/readinglist"

        let formData = new FormData();
        formData.append('token', this.props.token);

        fetch(url, {    method: 'POST',
            headers : new Headers(),
            body:formData})
            .then( (response) => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    throw Error(response.statusText);
                }
            })
            .then( (data) => {
                this.setState({readinglist:data.results})
            })
            .catch ((err) => {
                console.log("something went wrong ", err)
            });
    }


    render() {

        return (
            <div>
                {this.state.results.map( (paper) => (
                        <div key={paper.paper_id}>
                            <CheckBox readinglist={this.state.readinglist} paper_id={paper.paper_id} />
                            <Paper paper={paper}/>
                        </div>
                    )
                )}
            </div>
        )
    }
}

export default ReadingList;