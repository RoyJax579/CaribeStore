export const Switch = (state, action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            const {id, quantity, totalPrice} = action.item, newCart = [...state.cart]
            let newQty, newPrice

            //Gets the index of duplicated index
            const duplicatedIndex = newCart.findIndex(item => item.id === id)

            if (duplicatedIndex > -1){
                //add current qty of duplicated value n adds it to the newly added qty
                newQty = newCart[duplicatedIndex].quantity+quantity
                newPrice = newCart[duplicatedIndex].totalPrice+totalPrice

                //changes qty of that specific value
                newCart[duplicatedIndex] = {
                    ...action.item, 
                    quantity: newQty,
                    totalPrice: newPrice
                }
            }else{
                //if not duplicated, adds item normally to the cart
                newCart.push(action.item)
            }

            return {
                ...state,
                cart: newCart
            }
        case "UPDATE_CART":
            const newCart2 = [...state.cart], 
            index = newCart2.findIndex(item => item.id === action.itemInfo.id)

            const updatedQty = action.itemInfo.quantity

            if (index > -1){
                newCart2[index] = {
                    ...action.itemInfo, quantity: updatedQty, totalPrice: updatedQty*newCart2[index].price
                }
            }
            
            return {
                ...state,
                cart: newCart2
            }
        case "DELETE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(x => x.id !== action.itemID)
            }
            
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}