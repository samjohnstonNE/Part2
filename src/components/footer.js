import React from "react";

/**
 * Generates Footer component
 *
 * div and p tags are used to set the footer that can be added to the bottom of each page
 * the footer contents is hardcoded
 * css class used to decrease text side compared to the rest of the page
 *
 * @author Sam Johnston
 * @id W17004648
 */

class Footer extends React.Component {

    render() {


        return (
            <div className="info">
                <p>Sam Johnston - W17004648</p>
                <p>
                    This is University Coursework and is not associated
                    with Designing Interactive Systems (DIS) conference
                </p>
            </div>
        )
    }
}

export default Footer;
