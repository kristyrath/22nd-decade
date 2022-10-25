

export const CartContext = {
    cartItems,
}

export const CartProvider = () => {
    const values = {};
    return (
        <CartContext.Provider values = {values}>
            {children}
        </CartContext.Provider>
    )
}