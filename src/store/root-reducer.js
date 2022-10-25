import { userReducer } from './user/user.reducer';
import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";
import { categoriesReducer } from './categories/category.reducer'

export const rootReducer = combineReducers({
    cart: cartReducer,
    categories: categoriesReducer,
    user: userReducer
})