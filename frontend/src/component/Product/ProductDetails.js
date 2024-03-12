import React, { Fragment, useEffect } from 'react';
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from '../../actions/productAction';
import { useParams } from 'react-router-dom'; // Import useParams

const ProductDetails = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(getProductDetails(id)); // Pass the id to getProductDetails
  }, [dispatch, id]);
    
  return (
    <Fragment>
      <div className="ProductDetails">
        <div>
            <Carousel>
                {product.images &&
                    product.images.map((item, i) => (
                     <img
                    className='CarouselImage'
                    key={item.url}
                    src={item.url}
                    alt={`${i} Slide`} 
                    z/>
            ))}
            </Carousel>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductDetails;
