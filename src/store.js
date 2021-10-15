import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {createStore ,combineReducers} from 'redux';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducer';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})

const store = createStore(reducer, compose(applyMiddleware(thunk)));
export default store;