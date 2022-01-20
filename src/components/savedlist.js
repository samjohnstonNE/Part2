import React from "react";
import Saved from "./saved";

/**
 * Maps Reading List information if user is signed in
 *
 * Token is checked to verify the user
 * total number of papers is set based on length
 * Saved class is called
 *
 * @author Sam Johnston
 * @id W17004648
 */

class SavedList extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            results : [],
            readinglist : []
        }
    }

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