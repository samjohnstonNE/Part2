import React from "react";
import Footer from "./footer";

/**
 * Not Found Page
 *
 * div and p tags are used to set the info
 *
 * @author Sam Johnston
 * @id W17004648
 */

class NotFound extends React.Component {

    render() {
        return (
            <div className="App-header">
                <p>Error 404 Not Found</p>
                <Footer />
            </div>
        )
    }
}

export default NotFound;
