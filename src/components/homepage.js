import React from "react";
import Footer from "./footer";
import logo from "../logo.JPG";
import Papers from "./papers";

/**
 * Homepage component
 * Displays a random paper
 *
 * @author Sam Johnston
 * @id W17004648
 * @date 16/01/2022
 * @time 16:00
 *
 * @return {JSX.element}
 *
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
