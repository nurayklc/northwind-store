import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import "./index.css";

export default class App extends Component {
  state = {
    currentCategory: "", products:[]
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  componentDidMount(){
    this.getProducts();
  };

  getProducts = (categoryId) => {

    let url = "http://localhost:3000/products";
    if(categoryId){
      url+="?categoryId="+categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  render() {
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Product List", anything: "Anything" };
    return (
      <div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 font-bold">
            <Navi />
          </div>
          <div className="grid grid-cols-3 ">
            <CategoryList
              currentCategory={this.state.currentCategory}
              changeCategory={this.changeCategory}
              info={categoryInfo}
            />
            <div className="grid grid-cols-1 ">
              <ProductList
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={productInfo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
