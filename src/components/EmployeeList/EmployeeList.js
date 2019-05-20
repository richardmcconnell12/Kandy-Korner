import React, { Component } from "react"

export default class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
                <h2>All Employees</h2>
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id}>
                            {employee.employeeFirstName} {employee.employeeLastName}
                        </div>
                    )
                }
            </section>
        )
    }
}