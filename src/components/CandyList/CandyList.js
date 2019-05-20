import React, { Component } from 'react'

export default class Candy extends Component {
    render() {
        return (
            <section className="candies">
                <h2>All Candies</h2>
                {
                    this.props.candies.map(candy =>
                        <div key={candy.id}>
                            <h4>{candy.candyName}</h4>
                        </div>
                    )
                }
            </section>
        )
    }
}