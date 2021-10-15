import Axios from "axios";
import Cookie from "js-cookie";
import { CART_ADD_ITEM, CART_REMOVE_ITEM  } from "../constants/cartConstant";

const addToCart =(Id, qty) => async(dispatch, getState) =>{

    try{
        const{data} = await Axios.get("https://fakestoreapi.com/products/"+Id);
        dispatch({
            type: CART_ADD_ITEM, payload:{
                product:data._id,
            }
        });
        const{cart:{cartItems}} = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));
    } catch (error) {

    }
}
const removeFromCart =(productId) => (dispatch,getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId});
}
export {addToCart , removeFromCart}