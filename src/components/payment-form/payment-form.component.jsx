import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import './payment-form.styles.scss';
import Button from '../button/button.component';
import { selectCartTotal } from '../../store/cart/cart.selector.js';
import { useSelector } from 'react-redux';
import { selectCurrentUserEmail } from '../../store/user/user.selector.js';
import { useState } from 'react';
const PaymentForm = () => {
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUserEmail);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const [errorMessageIsVisible, setErrorMessageIsVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const testFunc = (e) => {
        e.preventDefault();
        console.log("testing func");
    }
    const paymentHandler = async (e) => {
        e.preventDefault();   
        console.log("running payment handler");

        if (!stripe || !elements || amount === 0) {
            return;
        }
        setIsProcessingPayment(true);
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({amount: amount * 100})}) // change to cents
            
        .then((res) => {
            return res.json();
        });
        const {paymentIntent: {client_secret}} = response;
        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser:  'Guest'
                }
            }
        });
        setIsProcessingPayment(false);
        if (paymentResult.error) {
            setErrorMessageIsVisible(true);
            setErrorMessage(paymentResult.error.message);
            console.log("Payment error: ", paymentResult.error);
        } else {

            if (paymentResult.paymentIntent.status === 'succeeded') {
                setErrorMessageIsVisible(false);
                alert('successful');
            }
        }
    }
    return (
        <div className='payment-form-wrapper-container'>
            <div className='payment-title-container'>
                <h1>Credit Card Payment</h1>
            </div>
            <div className='payment-form-container'>

                <form className='form-container' onSubmit={paymentHandler}>


                    <CardElement className='card-element'/>

                    <div className='payment-button-container'>
                        <Button disabled={isProcessingPayment}> Pay now</Button>
                    </div>
                </form>
                <div className='error-message-container'>
                    {errorMessageIsVisible ? <span>{errorMessage}</span> : <></>}
                    
                </div>
                <div className='payment-info'>

                    <span>Creator's note: use the following credentials for payment</span>
                    <div className='credentials-section'>
                        <span> 4242 4242 4242 4242</span>
                        <span> 02/25 </span>
                        <span> 424 </span>
                        <span> 42424 </span>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default PaymentForm;