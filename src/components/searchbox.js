import React from "react";

/**
 * Generates input tag for search box
 *
 * @author Sam Johnston
 * @id W17004648
 * @date 16/01/2022
 * @time 16:00
 *
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