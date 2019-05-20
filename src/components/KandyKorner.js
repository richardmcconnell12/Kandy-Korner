import React, { Component } from "react";
import EmployeeList from "./EmployeeList/EmployeeList";
import StoreList from "./StoreList/StoreList";
import CandyList from "./CandyList/CandyList";

export default class KandyKorner extends Component {

    candiesFromAPI = [
        { "id": 1, candyName: "Space Chimps", type: 5 },
        { "id": 2, candyName: "Dead Genesis", type: 1 },
        { "id": 3, candyName: "Night and Day", type: 4 },
        { "id": 4, candyName: "Creep", type: 3 },
        { "id": 5, candyName: "Prom Queens", type: 2 },
        { "id": 6, candyName: "Thousand Cuts", type: 6 }
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
        { id: 1, employeeFirstName: "Cara", employeeLastName: "Buntin", store: "Jupiter Chocolate" },
        { id: 2, employeeFirstName: "Anna", employeeLastName: "Romand", store: "Billie Zonka" },
        { id: 3, employeeFirstName: "Sully", employeeLastName: "Fleg", store: "Trogdor Candy Co." },
        { id: 4, employeeFirstName: "Aura", employeeLastName: "Simanek", store: "Maybe Baby Candies" },
        { id: 5, employeeFirstName: "Jerrilyn", employeeLastName: "Orcas", store: "Bing Bongo Co." },
        { id: 6, employeeFirstName: "Demetria", employeeLastName: "Mulcaster", store: "Willis and Sons" }
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
            <div className="kandy" >
                <StoreList stores={this.state.stores} />
                <EmployeeList employees={this.state.employees} />
                <CandyList candies={this.state.candies} />
            </div>
        )
    }
}