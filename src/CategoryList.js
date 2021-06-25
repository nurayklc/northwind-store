import React, { Component } from "react";

export default class CategoryList extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div className="py-8">
        <h3 className="font-bold">{this.props.info.title}</h3>
        <h3>{this.state.counter}</h3>
        <div className="py-4">
          <ul>
            {this.state.categories.map((category) => (
               <li //style={{backgroundColor: category.categoryName === this.props.currentCategory?'bg-blue-500':''}}
                className="border border-black-600 py-2 bg "
                onClick={() => this.props.changeCategory(category)}
                key={category.id}
              >
                {category.categoryName}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
