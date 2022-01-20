import React from "react";

/**
 * Generates the input box for the searching
 *
 * Search box can be added to any page
 *
 * @author Sam Johnston
 * @id W17004648
 */

class Searchbox extends React.Component {

    render() {
        return (
            <label>
                Search
                <input type='text' placeholder='search' value={this.props.search} onChange={this.props.handleSearch} />
            </label>
        )
    }
}

export default Searchbox;