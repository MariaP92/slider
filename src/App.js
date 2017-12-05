import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'redux-zero/react';
import { addToCart } from './actions';
import ShoppingCar from './Shopping_car';
import Slider from "react-slick";

const Maps = ({ item, index, addToCart }) => {
  return (

    <div className="col-sm-3">
      <div className="col-item">
        <div className="photo">
          <img src={item.image} />
        </div>
        <div className="info">
          <div className="row">
            <div className="price col-md-6">
              <strong className='y-astron'>{item.name}</strong>
              <span className="y-a-price"><span>$</span><span data-bind="text: price">{item.price}</span></span>

            </div>
            <div className="rating hidden-sm col-md-6">
              <i className="price-text-color fa fa-star"></i><i className="price-text-color fa fa-star">
              </i><i className="price-text-color fa fa-star"></i><i className="price-text-color fa fa-star">
              </i><i className="fa fa-star"></i>
            </div>
          </div>
          <div className="separator clear-left">
            <button className="add-to-cart" onClick={addToCart}>Add to cart</button>
          </div>
          <div className="clearfix">
          </div>
        </div>
      </div>
    </div>

  )
}
const App = ({ fuxionActive, fuxion, selectedItem }) => {
  class SimpleSlider extends React.Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  
  
      return (
        <Slider {...settings}>
          <div className="container">
            {
              fuxion.map((item, index) => {
                return <Maps key={index} item={item} index={index} addToCart={() => addToCart(index)} />
              })
            }
          </div>
        </Slider>
      );
    }
  }
  
  return (

    <div>
      <ShoppingCar />
     <SimpleSlider />
      
    </div>
  )
}

const mapToProps = ({ fuxionActive, fuxion, selectedItem }) => ({ fuxionActive, fuxion, selectedItem });
export default connect(mapToProps)(App);


