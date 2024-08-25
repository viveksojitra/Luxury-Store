import { ADD_PRODUCT, DELETE_PRODUCT, FETCH_PRODUCTS, RECORD_ERROR, RECORD_UPDATED, SELECT_PRODUCT, UPDATE_PRODUCT } from "../ActionType";

const initialState = {
    products: [],
    product: null,
    record: null,
    error: null,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                product: null,
            };

        case ADD_PRODUCT:
            return {
                ...state,
                products: action.payload,
                product: null,
            };

        case SELECT_PRODUCT:
            return {
                ...state,
                product: action.payload,
            };

        case UPDATE_PRODUCT:
            return {
                ...state,
                product: action.payload,
            };

        case DELETE_PRODUCT:
            return {
                ...state,
                product: action.payload,
            };

        case RECORD_UPDATED:
            return {
                ...state,
                record: action.payload
            }

        case RECORD_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
};

export default productReducer;