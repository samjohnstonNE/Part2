import React from "react";
import Footer from "./footer";
import logo from "../logo.JPG";
import Papers from "./papers";

/**
 * Homepage containing a picture, welcome text and a random paper
 * Footer can be found at the end of the content
 *
 * Displays a random paper through the Paper calls with the state set to true
 * Papers title can be clicked on to reveal more information
 *
 * @author Sam Johnston
 * @id W17004648
 */

class Homepage extends React.Component {

    render() {

        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p> Welcome to My App - Part 2 </p>
                <Papers randomPaper={true} />
                <Footer />
            </div>
        )
    }
}

export default Homepage;
