import React from 'react';
import { Link } from 'react-router-dom';
import './cascading.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { detailsProduct } from '../actions/productActions';
import { useState } from 'react';

function Productscreen(props) {
  const [qty, setqty] =useState(1);
  const productDetails = useSelector(state => state.productDetails);
  const{product,loading,error} = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id))
     return () => {
         //
     };
 }, [])
console.log(product)
 const handleAddToCart = () =>{
   props.history.push("/cart/"+props.match.params.id + "?qty=" +qty)
 }

    return (
    <div>
                 <div className="back-to">
                   <Link to="/">Back to homepage</Link>
                 </div>
                 {loading? <div>loading....</div>:
                   error?<div>{error}</div> :
                   (
                    <div className="details">
       
       <div className="details-img">
               <img className="product-img" src={product.image} alt="img"/>
       </div>
       <div className="details-info">
          <ul>
            <li>
              <h1> {product.title} </h1>
           </li>
            {/* <li>
              ( {product.rating.rate} stars out of {product.rating.count} reviews )
           </li> */}
            <li>
               <h3>Rs {product.price}</h3>
           </li>
            <li>
              Description: {product.description}
            </li>
          </ul>
       </div>
       <div className="details-action">
           <ul>
               <li>
                  <h3>Price : Rs {product.price}</h3> 
               </li>
               <li>
                  <h4> Qty : <select value={qty} onChange={(e) => {setqty(e.target.value)}}>
                       {[...Array(10).keys()].map(x=>
                       <option value={x+1}>{x+1}</option>
                       )}
                   </select></h4>
               </li>
               <li>
                 
                   <button onClick={handleAddToCart} className="button">Add to cart</button>
                   
               </li>
           </ul>
       </div>
  </div>
                   )
                  }
               
         </div>
    );
}
export default Productscreen;