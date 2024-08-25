import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../Firebaseconfig';

// Action Types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const LOAD_CART = 'LOAD_CART';

const cartRef = collection(db, 'cart');

// Add to Cart Action
export const addToCart = (product) => async (dispatch) => {
    try {
        const docRef = await addDoc(cartRef, product);

        dispatch({
            type: ADD_TO_CART,
            payload: { ...product, id: docRef.id }
        });
    } catch (error) {
        console.error("Error adding product to cart: ", error);
    }
};

// Remove from Cart Action
export const removeFromCart = (id) => async (dispatch) => {
    try {
        await deleteDoc(doc(db, 'cart', id));
        dispatch({
            type: REMOVE_FROM_CART,
            payload: id
        });
    } catch (error) {
        console.error("Error removing product from cart: ", error);
    }
};

// Load Cart Action (initial load from Firebase)
export const loadCart = () => async (dispatch) => {
    try {
        const querySnapshot = await getDocs(collection(db, 'cart'));
        const cartItems = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        dispatch({
            type: LOAD_CART,
            payload: cartItems
        });
    } catch (error) {
        console.error("Error loading cart: ", error);
    }
};
