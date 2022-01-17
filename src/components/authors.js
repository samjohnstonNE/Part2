import React from "react";
import Author from "./author";

/**
 * Displays author information
 *
 * @author Sam Johnston
 * @id W17004648
 * @date 16/01/2022
 * @time 16:00
 *
 * props.search passed down from AuthorsPage
 * props.page passed down from AuthorsPage
 *
 */

class Authors extends React.Component {

    /**
     * Set results as empty array
     * Default page 1
     *
     * @param props
     */
    constructor(props){
        super(props)
        this.state = {
            results : [],
            page: 1
        }
    }

    /**
     * Fetch data from endpoint and set as results
     *
     * Catch error and console log
     */
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


    /**
     * Search feature
     * both first and lastname
     *
     * @param s
     * @returns {boolean}
     */
    filterSearch = (s) => {
        return s.first_name.toLowerCase().includes(this.props.search.toLowerCase()) || s.last_name.toLowerCase().includes(this.props.search.toLowerCase())
    }

    /**
     * Adds buttons
     * Maps filtered data from the fetch
     * Calls author component using Author ID as key
     *
     * @var noData
     * @var filteredResults
     * @var buttons
     *
     * @returns {JSX.Element}
     */
    render() {
        let noData = ""

        /* No data displayed if data is empty */
        if (this.state.results.length === 0) {
            noData = <p>No data</p>
        }
        let filteredResults = this.state.results

        if ((filteredResults.length > 0) && (this.props.search !== undefined)) {
            filteredResults = filteredResults.filter(this.filterSearch)
        }

        let buttons = ""

        /* 25 results per page  */
        if (this.props.page !== undefined) {
            const pageSize = 25;
            let pageMax = this.props.page * pageSize
            let pageMin = pageMax - pageSize

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
