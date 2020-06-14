import React, { Component } from "react";

class APITest extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" }
    }

    callAPI() {
        fetch("http://localhost:5000/api/test")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }))
        .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <p>{this.state.apiResponse}</p>
        )
    }
}

export default APITest;
