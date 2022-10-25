import CartItemPreview from '../cart-item-preview/cart-item-preview.component';
import './cart-preview.styles.scss';
import Button from '../button/button.component';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import { Link } from 'react-router-dom';
const CartPreview = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
        return (
        <div className='cart-preview-container'>
                <h3>Your Items</h3>

                <div className = 'cart-item-preview-section'>
                    {   
                        cartItems?.map((cartItem) => {
                            const {id} = cartItem;
                            return <CartItemPreview key={id} cartItem = {cartItem}/>
                    })
                    }
                </div>
            <div className='line'></div>
            <div className='total-section'>
                <span>Total</span>
                <span>${cartTotal ? cartTotal.toFixed(2) : 0.00}</span>

            </div>

            <Link to = 'checkout'><Button>GO TO CHECKOUT</Button></Link>
        </div>
    )
}

export default CartPreview;