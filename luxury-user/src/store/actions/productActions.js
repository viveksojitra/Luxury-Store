import { db, storage } from "../../Firebaseconfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import generateUniqueId from 'generate-unique-id';
import { ADD_PRODUCT, DELETE_PRODUCT, FETCH_PRODUCTS, SELECT_PRODUCT, UPDATE_PRODUCT } from "../ActionType";

// Firestore Collection Reference
const productsCollectionRef = collection(db, "products");

// Action Creators
export const fetchProducts = (data) => ({
    type: FETCH_PRODUCTS,
    payload: data
});

export const addProduct = (data) => ({
    type: ADD_PRODUCT,
    payload: data
});

export const selectProduct = (data) => ({
    type: SELECT_PRODUCT,
    payload: data
});

export const updateProduct = (data) => ({
    type: UPDATE_PRODUCT,
    payload: data
});

export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: id
});

// Async Thunks
export const productGetAsync = () => {
    return async (dispatch) => {
        try {
            const querySnapshot = await getDocs(productsCollectionRef);
            const products = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            dispatch(fetchProducts(products));
        } catch (error) {
            console.error("ERROR", error);
        }
    };
};

export const productPostAsync = (data) => {
    return async (dispatch) => {
        try {
            data.id = generateUniqueId({
                length: 4,
                useLetters: false,
            });

            await addDoc(productsCollectionRef, data);
            dispatch(productGetAsync());
        } catch (error) {
            console.error("ERROR", error);
        }
    };
};

export const productSelectAsync = (id) => {
    return async (dispatch) => {
        try {
            const productDoc = await getDoc(doc(db, "products", id));
            if (productDoc.exists()) {
                dispatch(selectProduct({ ...productDoc.data(), id: productDoc.id }));
            } else {
                console.error("No such document!");
            }
        } catch (error) {
            console.error("ERROR", error);
        }
    };
};

export const productUpdateAsync = (data) => {
    return async (dispatch) => {
        try {
            const productDocRef = doc(db, "products", data.id);
            await updateDoc(productDocRef, data);
            dispatch(productGetAsync());
        } catch (error) {
            console.error("ERROR", error);
        }
    };
};

export const productDeleteAsync = (id) => {
    return async (dispatch) => {
        try {
            const productDocRef = doc(db, "products", id);
            await deleteDoc(productDocRef);
            dispatch(productGetAsync());
        } catch (error) {
            console.error("ERROR", error);
        }
    };
};

// ----------------------------------------------------

// Upload Files
const RecordUpdated = (record) => {
    return {
        type: "RECORD_UPDATED",
        payload: record
    }
}

const RecordError = (error) => {
    return {
        type: "RECORD_ERROR",
        payload: error
    }
}

// Upload Files
export const uploadFile = (file, record) => {
    return (dispatch) => {
        if (!file.name) {
            const error = new Error("File name is invalid");
            dispatch(RecordError(error.message));
            console.error("Error uploading file:", error.message);
            throw error;
        }

        const storageRef = ref(storage, file.name);

        return uploadBytes(storageRef, file)
            .then(() => getDownloadURL(storageRef))
            .then(url => {
                dispatch(RecordUpdated({ ...record, imageURL: url }));
                return { url };
            })
            .catch(error => {
                dispatch(RecordError(error.message));
                console.error("Error uploading file:", error.message);
                throw error;
            });
    };
};