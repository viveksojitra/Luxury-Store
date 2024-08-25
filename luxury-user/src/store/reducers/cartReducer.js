import { ADD_TO_CART, LOAD_CART, REMOVE_FROM_CART } from "../actions/cartAction";

const initialState = {
    cartItems: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, cartItems: [...state.cartItems, action.payload] };
        case REMOVE_FROM_CART:
            return { ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload) };
        case LOAD_CART:
            return { ...state, cartItems: action.payload };
        default:
            return state;
    }
};

export default cartReducer;
