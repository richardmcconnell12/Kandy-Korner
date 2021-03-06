import React, { Component } from 'react'

export default class Stores extends Component {
    render() {
        return (
            <section className="stores">
                <h2>All Stores</h2>
                {
                    this.props.stores.map(store =>
                        <div key={store.id}>
                            <h5>{store.storeName}</h5>
                        </div>
                    )
                }
            </section>
        )
    }
}