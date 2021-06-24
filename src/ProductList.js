import React, { Component } from "react";

export default class ProductList extends Component {
  render() {
    return (
      <div className="py-8 ml-4">
        <h3 className="font-bold">
          {this.props.info.title}-{this.props.currentCategory}
        </h3>
        <div className="p4 mt-4">
          <table className="border border-black-600">
            <thead>
              <tr>
                <th className="border border-black-600 py-2 px-12">Id</th>
                <th className="border border-black-600 py-2 px-12">Product Name</th>
                <th className="border border-black-600 py-2 px-12">Quantity Per Unit</th>
                <th className="border border-black-600 py-2 px-12">Unit Price</th>
                <th className=" border border-black-600 py-2 px-12">Unit In Stock</th>
              </tr>
            </thead>
            <tbody>
              {this.props.products.map((product) => (
                <tr
                  className="border border-black-600 py-2 px-12"
                  key={product.id}
                >
                  <th scope="row" className="border-black-600 py-2 px-4">{product.id}
                  </th>
                  <td className="border border-black-600 py-2 px-4">{product.productName}</td>
                  <td className="border border-black-600 py-2 px-4">{product.quantityPerUnit}</td>
                  <td className="border border-black-600 py-2 px-4">{product.unitPrice}</td>
                  <td className="border border-black-600 py-2 px-4">{product.unitsInStock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
