import { Switch } from "./Switch"

export const initialState = {
    cart: [],
    user: null
}

const Reducer = (state = initialState, action) =>{
    return Switch(state, action)
}

export default Reducer