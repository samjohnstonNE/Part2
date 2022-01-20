import React from "react";
import Footer from "./footer";
import SavedList from "./savedlist";

/**
 * A page to display the paper IDs of any papers the user has saved to their reading list
 *
 * The saved papers are only visible to a users who is logged in
 * The paper IDs are listed in numerical order and have a total amount at the bottom of the list
 *
 * @author Sam Johnston
 * @id W17004648
 */

class SavedListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            authenticated: false
        }
    }

    componentDidMount() {
        if(localStorage.getItem('myReadingListToken')) {
            this.setState({authenticated:true});
        }
    }


    render() {

        return (
            <div className="App-header">
                <SavedList />
                <Footer />
            </div>
        )
    }
}

export default SavedListPage;
