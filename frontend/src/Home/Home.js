import React, { Fragment } from 'react';
import { CgMouse } from 'react-icons/cg'; 
import "./Home.css"
import Product from "./Product.js";

const product = {
    name: "Blue T-shirt",
    images:  [{ url: "https://media.istockphoto.com/id/1133815061/vector/navy-blue-t-shirt-vector-for-template.jpg?s=612x612&w=0&k=20&c=nyfbxwlzYUETNZJ7CscUjEpUzre-4bmfWk_Tv74J6-I="}],
    price: "$149.00",
    _id: "piyush",   
};

const Home = () => {
  return (
   <Fragment>
    <div className='banner'>
        <p>Welcome to Tshirt_Hvn</p>
        <h1>FIND AMAZING TSHIRTS BELOW</h1>

        <a  href="#container">
            <button>
                Scroll <CgMouse />
            </button>
        </a>
    </div>
    <h2 className='homeHeading'>Featured Product</h2>

    <div className='container' id='container'>
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
    </div>
   </Fragment>
  );
};

export default Home;