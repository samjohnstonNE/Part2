import React from "react";


class PaperT extends React.Component {

    constructor(props) {
        super(props)
        this.state = { display: false }
    }


    render() {

        return(

            <div>
                <p> {this.props.paper.title}</p>
            </div>
        )
    }
}

export default PaperT;
