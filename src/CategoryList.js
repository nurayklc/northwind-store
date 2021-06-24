import React, { Component } from "react";
import Draggable from 'react-draggable';

export default class CategoryList extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: "Beverages" },
      { categoryId: 2, categoryName: "Condiments" },
    ],
    currentCategory: "",
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };

  render() {
    return (
      <div className="py-8">
        <h3 className="font-bold">{this.props.info.title}</h3>
        <h3>{this.state.counter}</h3>
        <div className="py-4">
          <ul>
            {this.state.categories.map((category) => (
              <li
                className="border border-black-600 py-2"
                onClick={() => this.changeCategory(category)}
                key={category.categoryId}
              >
                {category.categoryName}
              </li>
            ))}
          </ul>
          <h4>{this.state.currentCategory}</h4>
        </div>
        <Draggable>
          <div className="box">
            <div>Move me around!</div>
          </div>
        </Draggable>
      </div>
    );
  }
}
