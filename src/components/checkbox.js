import React from "react";

/**
 * Creates the checkboxes for the readinglist page
 *
 * Uses POST requests to update the database based on which paper id is selected
 * displays the checkboxes alongside each title and is visible when they
 * are checked and unchecked (changed state)
 *
 * @author Sam Johnston
 * @id W17004648
 */

class CheckBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {checked:false}
    }

    componentDidMount() {
        let filteredList = this.props.readinglist.filter((item) => (this.isOnList(item)))
        if (filteredList.length > 0) {
            this.setState({checked:true})
        }
    }

    /* checks to see if the paper id is on the list */
    isOnList = (item) => {
        return (item.paper_id === this.props.paper_id)
    }

    addToReadingList = () => {
        let url = "http://unn-w17004648.newnumyspace.co.uk/kf6012/coursework/part1/api/readinglist"

        let formData = new FormData();
        formData.append('token', localStorage.getItem('myReadingListToken'));
        /* adds a paper from the list  */
        formData.append('add', this.props.paper_id);

        fetch(url, {   method: 'POST',
            headers : new Headers(),
            body:formData})
            .then( (response) => {
                if ((response.status === 200) || (response.status === 204)) {
                    this.setState({checked:!this.state.checked})
                } else {
                    throw Error(response.statusText);
                }
            })
            .catch ((err) => {
                console.log("something went wrong ", err)
            });
    }

    removeFromReadingList = () => {
        let url = "http://unn-w17004648.newnumyspace.co.uk/kf6012/coursework/part1/api/readinglist"

        let formData = new FormData();
        formData.append('token', localStorage.getItem('myReadingListToken'));
        /* removes a paper from the list  */
        formData.append('remove', this.props.paper_id);

        fetch(url, {  method: 'POST',
            headers : new Headers(),
            body:formData})
            .then( (response) => {
                if ((response.status === 200) || (response.status === 204)) {
                    this.setState({checked:!this.state.checked})
                } else {
                    throw Error(response.statusText);
                }
            })
            .catch ((err) => {
                console.log("something went wrong ", err)
            });
    }

    /* change checked state to  */
    handleOnChange = () => {
        if (this.state.checked) {
            this.removeFromReadingList()
        } else {
            this.addToReadingList()
        }
    }


    render() {

        return (
            <input
                type="checkbox"
                id="readinglist"
                name="readinglist"
                value="paper"
                checked={this.state.checked}
                onChange={this.handleOnChange}
            />
        )
    }
}

export default CheckBox;