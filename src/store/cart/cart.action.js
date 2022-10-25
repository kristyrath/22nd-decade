import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (currentCartItems, itemToAdd) => {
    const cartItemToFind = currentCartItems.find((item) => item.id === itemToAdd.id);
    if (cartItemToFind) {
        return currentCartItems.map((cartItem) => (
                itemToAdd.id == cartItem.id ? 
                {...cartItem, quantity: cartItem.quantity + 1 } 
                : cartItem 
            ))
        
    }
    return [...currentCartItems, {...itemToAdd, quantity: 1}];

}

const clearCartItem = (currentCartItems, itemToClear) => {
    return currentCartItems.filter((cartItem) => cartItem.id !== itemToClear.id);
}
const removeCartItem = (currentCartItems, itemToRemove) => {
    const existingCartItem = currentCartItems.find((cartItem) => cartItem.id === itemToRemove.id);
    if (existingCartItem.quantity === 1) {
        
        return currentCartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
    }
    return currentCartItems.map((cartItem) => 
        (cartItem.id === itemToRemove.id) ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
    );
};


export const addCartItemAction = (cartItems, productToAdd) => {
    let newCartItems = addCartItem(cartItems, productToAdd);
    if (!newCartItems) {
        newCartItems = [];
    }
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  };

export const removeCartItemAction = (currentCartItems, itemToRemove) => {
    const updatedCart = removeCartItem(currentCartItems, itemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedCart);
};

export const clearCartItemAction = (currentCartItems, itemToClear) => {
    const updatedCart = clearCartItem(currentCartItems, itemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedCart);
};

export const setCartIsOpenAction = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);


 