import React, { Component } from 'react'

export default class Kandy extends Component {

    getCandyType(candyObj) {
        let candyType = this.props.candyType.find(type => {
            if (candyObj.candyId === type.id) {
                return true
            } else {
                return false
            }
        })
        return candyType
    }

    render() {
        return (
            <section className="candies">
                <h2>All Candies</h2>
                {
                    this.props.candies.map(candy =>
                        <div key={candy.id}>
                            <h4>{candy.candyName}</h4>
                            <h6>Type: {this.getCandyType(candy).candyType}</h6>
                        </div>
                    )
                }
            </section>
        )
    }
}