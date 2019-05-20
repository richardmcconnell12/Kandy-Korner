import { Route } from 'react-router-dom'
import React, { Component } from "react";
import EmployeeList from "./EmployeeList/EmployeeList";
import StoreList from "./StoreList/StoreList";
import CandyList from "./CandyList/CandyList";

export default class ApplicationViews extends Component {

    candiesFromAPI = [
        { id: 1, candyName: "Space Chimps", candyId: 5 },
        { id: 2, candyName: "Dead Genesis", candyId: 1 },
        { id: 3, candyName: "Night and Day", candyId: 4 },
        { id: 4, candyName: "Creep", candyId: 3 },
        { id: 5, candyName: "Prom Queens", candyId: 2 },
        { id: 6, candyName: "Thousand Cuts", candyId: 6 }
    ]

    candyTypesFromAPI = [
        { id: 1, candyType: "Gummies" },
        { id: 2, candyType: "Chocolate" },
        { id: 3, candyType: "Sour Tarts" },
        { id: 4, candyType: "Hard Candy" },
        { id: 5, candyType: "Chocolate" },
        { id: 6, candyType: "Spiked Suckers" }
    ]

    employeesFromAPI = [
        { id: 1, employeeFirstName: "Cara", employeeLastName: "Buntin" },
        { id: 2, employeeFirstName: "Anna", employeeLastName: "Romand" },
        { id: 3, employeeFirstName: "Sully", employeeLastName: "Fleg" },
        { id: 4, employeeFirstName: "Aura", employeeLastName: "Simanek" },
        { id: 5, employeeFirstName: "Jerrilyn", employeeLastName: "Orcas" },
        { id: 6, employeeFirstName: "Demetria", employeeLastName: "Mulcaster" }
    ]

    storesFromAPI = [
        { "id": 1, storeName: "Jupiter Chocolate" },
        { "id": 2, storeName: "Billie Zonka" },
        { "id": 3, storeName: "Trogdor Candy Co." },
        { "id": 4, storeName: "Maybe Baby Candies" },
        { "id": 5, storeName: "Bing Bongo Co." },
        { "id": 6, storeName: "Willis and Sons" }
    ]

    state = {
        stores: this.storesFromAPI,
        employees: this.employeesFromAPI,
        candies: this.candiesFromAPI,
        candyType: this.candyTypesFromAPI
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <StoreList stores={this.state.stores} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/candies" render={(props) => {
                    return <CandyList candies={this.state.candies} candyType={this.state.candyType} />
                }} />
            </React.Fragment>
        )
    }
}
