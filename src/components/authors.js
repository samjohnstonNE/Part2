import React from "react";
import Author from "./author";

/**
 * Author details
 *
 * GET request is used to retrieve data
 * all data is then filter using javascript
 * page size is set to 25 (results per page)
 * data is mapped and author id is passed to the Author class
 *
 * @author Sam Johnston
 * @id W17004648
 */

class Authors extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            results : [],
            page: 1
        }
    }

    componentDidMount() {
        let url = "http://unn-w17004648.newnumyspace.co.uk/kf6012/coursework/part1/api/authors"

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

    filterSearch = (s) => {
        return s.first_name.toLowerCase().includes(this.props.search.toLowerCase()) || s.last_name.toLowerCase().includes(this.props.search.toLowerCase())
    }


    render() {
        let noData = ""

        /* No data displayed if data is empty */
        if (this.state.results.length === 0) {
            noData = <p>No data</p>
        }
        let filteredResults = this.state.results

        /* if the length is greater than 0 and not undefined then user the search function */
        if ((filteredResults.length > 0) && (this.props.search !== undefined)) {
            filteredResults = filteredResults.filter(this.filterSearch)
        }

        let buttons = ""

        /* 25 results per page  */
        if (this.props.page !== undefined) {
            const pageSize = 25;
            let pageMax = this.props.page * pageSize
            let pageMin = pageMax - pageSize

            /* buttons are called in the return */
            buttons = (
                <div>
                    <button onClick={this.props.handlePreviousClick} disabled={this.props.page <= 1}>Previous</button>
                    <button onClick={this.props.handleNextClick} disabled={this.props.page >= Math.ceil(filteredResults.length / pageSize)}>Next</button>
                </div>
            )
            filteredResults = filteredResults.slice(pageMin, pageMax)
        }

        return (
            <div>
                {noData}
                {filteredResults.map( (author) => (<Author key={author.author_id} author={author} />) )}
                {buttons}
            </div>
        )
    }
}

export default Authors;
