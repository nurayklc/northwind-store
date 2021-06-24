import React, { Component } from 'react'

export default class ProductList extends Component {
    render() {
        return (
            <div className="py-8 font-bold">
                <h3>{this.props.info.title}</h3>
            </div>
        )
    }
}
