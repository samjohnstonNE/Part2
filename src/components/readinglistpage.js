import React from "react";
import Login from "./login.js";
import Logout from "./logout";
import ReadingList from "./readinglist";
import Footer from "./footer";

/**
 * Displays papers that can added or removed from the users reading list
 *
 * Users credentials are checked against the database
 * rejected if invalid, if not then authentication set to true and token is stored in local storage
 * token is passed as a prop to ReadingList class
 * Papers title can be clicked on to reveal more information
 *
 * @author Sam Johnston
 * @id W17004648
 */

class ReadingListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            email: "",
            password: "",
            token: null
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    componentDidMount() {
        if(localStorage.getItem('myReadingListToken')) {
            this.setState({authenticated:true, token:localStorage.getItem('myReadingListToken')});
        }
    }

    handlePassword = (e) => {
        this.setState({password:e.target.value})
    }

    handleEmail = (e) => {
        this.setState({email:e.target.value})
    }

    handleLoginClick = () => {
        let url = "http://unn-w17004648.newnumyspace.co.uk/kf6012/coursework/part1/api/authenticate"

        let formData = new FormData();
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);

        fetch(url, { method: 'POST',
            headers : new Headers(),
            body:formData
        })
            .then( (response) => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    throw Error(response.statusText)
                }
            })
            .then( (data) => {
                if ("token" in data.results) {
                    this.setState({ authenticated: true, token: data.results.token})
                    /* stores token data in local storage */
                    localStorage.setItem('myReadingListToken', data.results.token)
                }
            })
            .catch ((err) => {
                    console.log("something went wrong ", err)
                }
            );
    }

    handleLogoutClick = () => {
        this.setState({authenticated:false, token: null})
        localStorage.removeItem('myReadingListToken');
    }


    render() {

        let page = (
            <Login
                handleEmail={this.handleEmail}
                handlePassword={this.handlePassword}
                handleLoginClick={this.handleLoginClick}
            />
        )
        if (this.state.authenticated) {
            page = (
                <div>
                    <p className={"smaller"}>Papers titles can be clicked to reveal more info</p>
                    <Logout handleLogoutClick={this.handleLogoutClick} />
                    <ReadingList token={this.state.token}/>
                </div>
            )
        }

        return (
            <div>
                {page}
                <Footer />
            </div>
        )
    }
}

export default ReadingListPage;
