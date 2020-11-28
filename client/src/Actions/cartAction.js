export const addToCart = (title, quantity, price, image) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection("cart").add({
            title,
            quantity,
            price,
            image
        }).then(()=>{
            dispatch({
                type: "ADD_TO_CART",
                item: {
                    title,
                    quantity,
                    price,
                    image
                }
            })
        }).catch((error)=>{
            dispatch({
                type: "ADD_TO_CART_ERROR",
                error
            })
        })

        
    }
}