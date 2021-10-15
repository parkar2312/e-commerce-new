import Axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM  } from "../constants/cartConstant";

const addToCart =(id,qty) => async(dispatch, getState) =>{

    try{
        const{data} = await Axios.get("https://fakestoreapi.com/products/"+id);
        dispatch({
            type: CART_ADD_ITEM, payload:{
                product:data.id,
                name: data.name,
                price:data.price,
                image:data.image,
                countINstock: data.countINstock,
                qty
            }
        });
        const{cart:{cartItems}} = getState();
    } catch (error) {

    }
}
const removeFromCart =(id) => (dispatch,getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: id});
}
export {addToCart , removeFromCart}