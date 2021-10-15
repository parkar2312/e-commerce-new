import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartAction';
import logo1 from './images/download.jpg';
import './cascading.css';

 function CartScreen(props){

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

 const productId = props.match.params.id;
 const qty =props.location.search? Number(props.location.search.split("=")[1]):1;
 const dispatch = useDispatch();

 const removeFromCartHandler =(productId) =>{
    dispatch(removeFromCart(productId));
 }

 useEffect(() =>{
     if(qty){
         dispatch(addToCart(productId, qty));

     }
 },[])

 const checkOutHandler = ()=>{
     props.history.push("/signin?redirect=shipping");
 }
     console.log(cart)
    return<div className="cart">
        <div className="hide"><h3>My Cart</h3></div>
            <div className="cart-list">
               <ul className="cart-list-cont"> 
                   <li>
                    <div className="h3"><h3>Shopping Cart</h3></div> 
                   <div className="price"><h3>Price</h3></div>
                   </li>
                   {
                    cartItems.length === 0 ?
                       <div>Empty Cart </div>
                       :
                       cartItems.map(item => 
                         <li>
                      
                           <div ><img className="cart-image" src={item.image} alt="img"/></div>
                           <div>
                       <div className="cart-name">  
                           <div className="middlecont">
                           <div><Link to ={"/product/"+ item.product}> <h4>{item.name}</h4></Link></div>
                          
                       <div className="quantity">Qty:
                           <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                               <option value="4">4</option>
                               <option value="5">5</option>
                               <option value="6">6</option>
                           </select>
                       </div>
                       </div>
                       <button className="baaaton" onClick={()=> removeFromCartHandler(item.product)}>Delete</button>
                       </div>
                       </div>
                       <div className="cart-price">{item.price}</div>     
                       </li>
                           )
                   }
               </ul>
            </div>
            <div className="cart-action">
             <h3>
                 Subtotal({cartItems.reduce((a,c) => a + c.qty,0)} items)
                 :
             RS {cartItems.reduce((a,c) => a+ c.price * c.qty,0)}
             </h3>
            <button className="buuuton" onClick={checkOutHandler} disabled={cartItems.length === 0}>Proceed to checkout</button>
            </div>
        </div>
                
 }
export default CartScreen;