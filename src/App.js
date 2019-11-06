import React from 'react';
import './App.css';
import Products from './components/Products';

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      products: [],
      filteredProducts: []
    }
  }

  componentWillMount(){
    fetch('http://localhost:8000/products')
    .then(resp => resp.json())
    .then(products => {
      this.setState({
        products: products,
        filteredProducts: products
      })
    })
  }

  handleAddToCart(){


  }


  render(){
    return (
      <div className="container">
        <h1>Ecommerce Shopping Application</h1>
        <br/>
        <div className="row">
          <div className="col-md-8">
            <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart()}/>
          </div>
          <div className="col-md-4">
  
          </div>
        </div>
      </div>
    );
  }
}