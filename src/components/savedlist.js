import React from "react";
import Saved from "./saved";

/**
 * Displays Reading List information if user is signed in
 *
 * @author Sam Johnston
 * @id W17004648
 * @date 16/01/2022
 * @time 16:00
 *
 */

class SavedList extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            results : [],
            readinglist : []
        }
    }

    /**
     * Pulls reading list info
     *
     * catches error
     * sets as results
     */
    componentDidMount() {
        let url = "http://unn-w17004648.newnumyspace.co.uk/kf6012/coursework/part1/api/readinglist"

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
     * Maps results
     * calls Saved
     *
     * Renders total results as number
     *
     * @return {JSX.Element}
     */
    render() {
        return (
            <div>
                {this.state.readinglist.map( (list) => (<Saved key={list.paper_id} list={list}/>) )}
                <p className="info">Total: {this.state.readinglist.length}</p>
            </div>
        )
    }
}

export default SavedList;