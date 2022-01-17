import React from "react";

/**
 * Generates Checkbox component
 *
 * @author Sam Johnston
 * @id W17004648
 * @date 16/01/2022
 * @time 16:00
 *
 */

class CheckBox extends React.Component {

    /**
     * Set state to false by default
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {checked:false}
    }

    /**
     * Setting the state to true if the filtered item matches a paper id
     *
     * @var filteredList
     */
    componentDidMount() {
        let filteredList = this.props.readinglist.filter((item) => (this.isOnList(item)))
        if (filteredList.length > 0) {
            this.setState({checked:true})
        }
    }

    /**
     * Check paper id against item param
     *
     * @param item
     * @return {boolean}
     */
    isOnList = (item) => {
        return (item.paper_id === this.props.paper_id)
    }

    /**
     * Function to add papers to the users' reading list
     * POST requests only
     *
     * Change state upon HTTP code
     *
     * Catch errors
     *
     * @var readinglist API address
     * @var formData
     *
     */
    addToReadingList = () => {
        let url = "http://unn-w17004648.newnumyspace.co.uk/kf6012/coursework/part1/api/readinglist"

        let formData = new FormData();
        formData.append('token', localStorage.getItem('myReadingListToken'));
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

    /**
     * Function to remove papers from the users' reading list
     * POST requests only
     *
     * Change state upon HTTP code
     *
     * Catch errors
     *
     * @var readinglist API address
     * @var formData
     *
     */
    removeFromReadingList = () => {
        let url = "http://unn-w17004648.newnumyspace.co.uk/kf6012/coursework/part1/api/readinglist"

        let formData = new FormData();
        formData.append('token', localStorage.getItem('myReadingListToken'));
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

    /**
     * Upon change of state call function
     */
    handleOnChange = () => {
        if (this.state.checked) {
            this.removeFromReadingList()
        } else {
            this.addToReadingList()
        }
    }

    /**
     * Render HTML input tag
     * pass checked state
     * set onClick function
     *
     * @return {JSX.Element}
     */
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