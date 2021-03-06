import React from "react";
import Papers from "./papers.js";
import SelectAward from "./selectaward.js";
import SearchBox from "./searchbox.js";
import Footer from "./footer";

/**
 * Displays the list of papers
 *
 * Papers title can be clicked on to reveal more information
 * The user can filter the paper using either the search box or award filter
 * The search filter searches both title and abstract
 *
 * @author Sam Johnston
 * @id W17004648
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

    handleSearch = (e) => {
        this.setState({search:e.target.value, page:1})
    }

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


    render() {
        return (
            <div className="App-header">
                <p className={"smaller"}>Papers titles can be clicked to reveal more info</p>
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