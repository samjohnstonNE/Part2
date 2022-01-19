import React from "react";
import Papers from "./papers.js";
import SelectAward from "./selectaward.js";
import SearchBox from "./searchbox.js";
import Footer from "./footer";

/**
 * Displays Paper information
 * Search box
 * Award Filter
 * Footer
 *
 * @author Sam Johnston
 * @id W17004648
 * @date 16/01/2022
 * @time 16:00
 *
 */

class PaperPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            award: "",
            search: "",
            page: 1
        }
        this.handleAwardSelect = this.handleAwardSelect.bind(this);
        this.handleSearch= this.handleSearch.bind(this);
        this.handleNextClick= this.handleNextClick.bind(this);
        this.handlePreviousClick= this.handlePreviousClick.bind(this);
    }


    /**
     * Change search state to value
     * Set page state to one upon function call
     *
     * @param e
     */
    handleSearch = (e) => {
        this.setState({search:e.target.value, page:1})
    }

    /**
     * Change award state to value
     * Set page state to one upon function call
     *
     * @param e
     */
    handleAwardSelect = (e) => {
        this.setState({award:e.target.value, page:1})
    }

    /* Change page state +1 */
    handleNextClick = () => {
        this.setState({page:this.state.page+1})
    }

    /* Change page state -1 */
    handlePreviousClick = () => {
        this.setState({page:this.state.page-1})
    }


    /**
     * renders multiple components
     * states and functions are passed
     *
     * @return {JSX.Element}
     */
    render() {
        return (
            <div className="App-header">
                <SearchBox search={this.state.search} handleSearch={this.handleSearch} />
                <SelectAward award={this.state.award} handleAwardSelect={this.handleAwardSelect} />
                <Papers
                    award={this.state.award}
                    search={this.state.search}
                    page={this.state.page}
                    handleNextClick={this.handleNextClick}
                    handlePreviousClick={this.handlePreviousClick}
                />
                <Footer />
            </div>
        )
    }
}

export default PaperPage;