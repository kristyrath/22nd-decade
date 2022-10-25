import './cart-item-preview.styles.scss';

const CartItemPreview = ({cartItem}) => {

    const { imgUrl, quantity} = cartItem;
    let {name} = cartItem;
    if (name.length > 20) {
        name = name.substring(0, 20).concat("...");
    }
    let {price} = cartItem;
    const priceFixed = Number(price).toFixed(2);
    return (
        <div className = 'cart-item-preview-container'>
            <div className = 'cart-item-preview-img-container'
            style = {{
                backgroundImage: `url(${imgUrl})`
            }}></div>
            <div className = 'cart-item-preview-details'>
                <div className='cart-item-preview-name'>
                    <span>{name}</span>
                    <span>x {quantity}</span>
                </div>
                <div className='cart-item-preview-other'>
                    <span>${priceFixed}</span>
                </div>
            </div>
        </div>
    )
}

export default CartItemPreview;