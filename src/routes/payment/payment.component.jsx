import PaymentForm from "../../components/payment-form/payment-form.component";
import './payment.styles.scss';
import BackgroundImage from '../../assets/values-bg.png';
import { useSelector } from "react-redux";
import { selectCurrentUserEmail } from "../../store/user/user.selector";
import { useNavigate } from "react-router";
import { useEffect } from "react";
const Payment = () => {
    const user = useSelector(selectCurrentUserEmail);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate('/signin');
        }
    }, [])

    return (
        <div className='payment-page-container'  style={{
            backgroundImage: `url(${BackgroundImage})`
        }}>
            <PaymentForm/> 
        </div>
    )
}


export default Payment;