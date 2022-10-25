

export const CartItemContext = {
    ...cartItem,
    quantity,
}

export const CartItemProvider = () => {


    const values = {};
    return (
        <CartItemContext.Provider values = {values}>
            {children}
        </CartItemContext.Provider>
    )
}