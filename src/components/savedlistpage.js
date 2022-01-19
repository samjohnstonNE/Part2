import React from "react";
import Footer from "./footer";
import SavedList from "./savedlist";

/**
 * Displays paper_id of currently saved papers in Reading List
 *
 * @author Sam Johnston
 * @id W17004648
 * @date 16/01/2022
 * @time 16:00
 *
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
            <div>
                <SavedList />
                <Footer />
            </div>
        )
    }
}

export default SavedListPage;
