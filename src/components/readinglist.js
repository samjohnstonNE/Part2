import React from "react";
import Paper from "./paper";
import CheckBox from "./checkbox";

/**
 * Displays Paper information and checkboxes
 * GET and POST requests
 *
 * @author Sam Johnston
 * @id W17004648
 * @date 16/01/2022
 * @time 16:00
 *
 */

class ReadingList extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            results : [],
            readinglist : []
        }
    }

    /**
     * Retrieves papers
     *
     * POST requests the items selected
     *
     * @var reading endpoint
     * @var readinglist endpoint
     *
     */
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
        formData.append('token', localStorage.getItem('myReadingListToken'));

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

    /**
     * Renders the paper info and checkboxes
     *
     * @return {JSX.Element}
     */
    render() {

        console.log(this.state.readinglist)
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