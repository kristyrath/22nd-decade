import { useDispatch, useSelector } from 'react-redux';
import { addCartItemAction, clearCartItemAction, removeCartItemAction } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import './cart-item.styles.scss';

const CartItem = ({cartItem}) => {
    const {name, price, imgUrl, quantity} = cartItem;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const increaseQuantity = () => {
        dispatch(addCartItemAction(cartItems, cartItem));
    }
    const decreaseQuantity = () => {
        dispatch(removeCartItemAction(cartItems, cartItem));
    }
    const removeCartItem = () => {
        dispatch(clearCartItemAction(cartItems, cartItem));
    }
    return (
        <div className='cart-item-container'>
            <div className='cart-item-img-container' style={{
                backgroundImage: `url(${imgUrl})`
            }}>
            </div>
            <div className='cart-item-description-container'>
                <div className='cart-item-description'>
                    <span>{name}</span>
                    <span className='price'>${Number(price).toFixed(2)}</span>
                </div>
                <div className='cart-item-quantity'>
                    <span className="material-symbols-outlined clickables" onClick = {decreaseQuantity}>
                        remove
                    </span>
                    <span className='quantity'>{quantity}</span>
                    <span className="material-symbols-outlined clickables" onClick = {increaseQuantity}>
                        add
                    </span>

                </div>
                <span className="material-symbols-outlined delete-icon clickables" onClick = {removeCartItem}>
                    close
                </span>
            </div>
           


        </div>
    )
}

export default CartItem;