import React from "react";
import Footer from "./footer";

/**
 * Not Found Page
 *
 * @author Sam Johnston
 * @id W17004648
 * @date 16/01/2022
 * @time 16:00
 *
 * @return {JSX.element}
 *
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
