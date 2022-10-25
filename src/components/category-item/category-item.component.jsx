import './category-item.styles.scss';
import Button from '../../components/button/button.component';
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItemAction } from '../../store/cart/cart.action';
import { selectCartItems, selectCartReducer } from '../../store/cart/cart.selector';
const CategoryItem = ({item}) => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const addToCart = () => { 
        dispatch(addCartItemAction(cartItems, item));
        console.log("CARTITEMS", cartItems);
    }
    
    const [buttonIsHidden, setButtonIsHidden] = useState("hidden");
    const showButton = (e) => {
        setButtonIsHidden("");
    }
    const hideButton = (e) => {
        setButtonIsHidden("hidden");
    }
    const {id, name, price, imgUrl} = item;
    return (
        <div className='category-item-container' >
            <div className='category-item-img' 
                onMouseEnter={(e) => showButton(e)}
                onMouseLeave={(e) => hideButton(e)}
                style={{backgroundImage: `url(${imgUrl})`}}>

                    
                <div onClick={addToCart} className={`button-container ${buttonIsHidden}`}>
                    <Button key={id} id={id} itemName={name}>ADD TO CART</Button>
                </div>
                    
            
            </div>

            <div className= 'category-item-details'>
                <div><span>{name}</span></div>
                <div><span>${Number(price).toFixed(2)}</span></div>
            </div>
        </div>

    );

}

export default CategoryItem;