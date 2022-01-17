import React from "react";
import SearchBox from "./searchbox.js";
import Footer from "./footer";
import Authors from "./authors";

/**
 * Displays Author information
 *
 * @author Sam Johnston
 * @id W17004648
 * @date 16/01/2022
 * @time 16:00
 *
 */

class AuthorPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            search: "",
            page: 1
        }
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

    /*  Change page state +1 */
    handleNextClick = () => {
        this.setState({page:this.state.page+1})
    }

    /* Change page state -1 */
    handlePreviousClick = () => {
        this.setState({page:this.state.page-1})
    }


    /**
     * Call SearchBox
     *
     * Call Authors, set search and page state
     * Pass functions to Authors
     *
     * Call Footer
     *
     * @returns {JSX.Element}
     */
    render() {
        return (
            <div className="App-header">
                <SearchBox search={this.state.search} handleSearch={this.handleSearch} />
                <Authors
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

export default AuthorPage;