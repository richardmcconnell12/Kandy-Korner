import React, { Component } from "react"
import NavBar from "./NavBar/NavBar"
import ApplicationViews from "./ApplicationViews"
import "bootstrap/dist/css/bootstrap.min.css"
export default class Kandy extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}