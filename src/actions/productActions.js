import axios from 'axios';
const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } = require("../constants/productConstants")

const listProducts = () => async(dispatch) => {
try{

    dispatch({type: PRODUCT_LIST_REQUEST});
    const {data} = await axios.get("https://fakestoreapi.com/products/");
    dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
}
catch(error){
    dispatch({type:PRODUCT_LIST_FAIL, payload: error.message})
}

}

const detailsProduct= (id) => async(dispatch) =>{
    try{
        dispatch({type:PRODUCT_DETAILS_REQUEST, payload: id});
        const {data} = await axios.get("https://fakestoreapi.com/products/"+ id);
        dispatch({type:PRODUCT_DETAILS_SUCCESS, payload:data});
    }
    catch(error){
        dispatch({type:PRODUCT_DETAILS_FAIL, payload:error.message})
    }
}
export {listProducts, detailsProduct}