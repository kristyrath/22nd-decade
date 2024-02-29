import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/button/button.component';
import CartItem from '../../components/cart-item/cart-item.component';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import GreenBackground from '../../assets/values-bg.png';
import './checkout.styles.scss';
const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    return (
        <div className='cart-container'>
            <div className='cart-title-container'>
                <h1>Checkout</h1>
            </div>
            <div className='cart-content-wrapper'>

                <div className='cart-content'>
                    <div className='cart-items-container'>
                        {
                            cartItems?.map((item) => {
                                const {id} = item;
                                console.log("here");
                                console.log(item);
                                
                                return <div className = 'cart-item-container'>
                                    <CartItem key = {id} cartItem = {item}/>
                                </div>
                            })
                        }
                    </div>
                    
                    <div className='line'></div>

                    <div className='total-container'>
                            <div className='total-section'>
                                <h3>Total</h3>
                                <span className='total-price'>${Number(cartTotal).toFixed(2)}</span>
                            </div>

                            <Link className='go-to-payment-button' to = 'payment'><Button>Pay now</Button></Link> 
                            
                    </div>
                </div>

            </div>
            



        </div>



    )
}


export default Checkout;