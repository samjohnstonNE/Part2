import React from "react";
import AuthorsNames from "./authorsname";

/**
 * Author information
 * Details hidden by default
 *
 * @author Sam Johnston
 * @id W17004648
 * @date 16/01/2022
 * @time 16:00
 *
 * paper.id passed down from Paper
 *
 */

class AuthorsContent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            results : []
        }
    }


    /**
     * Fetch data from endpoint and set as results
     *
     * Catch error and console log
     */
    componentDidMount() {
        let url = "http://unn-w17004648.newnumyspace.co.uk/kf6012/coursework/part1/api/papers"

        if (this.props.paper_id !== undefined) {
            url += "?content=" + this.props.paper_id
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

    /**
     * Maps results from fetch
     * calls AuthorNames components using author id as key
     *
     * @var noData
     *
     * @returns {JSX.Element}
     */
    render() {
        let noData = ""

        if (this.state.results.length === 0) {
            noData = <p>No data</p>
        }

        return (
            <div>
                {noData}
                {this.state.results.map( (author) => (<AuthorsNames key={author.author_id} author={author} />) )}
            </div>
        )
    }
}

export default AuthorsContent;
