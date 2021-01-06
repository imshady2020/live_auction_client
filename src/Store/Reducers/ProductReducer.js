import { ProductActions } from './../Actions/ProductActions';

const ProductState = {
    user: "Marko Taskovic",
    products: []
};

// Product Reducer
const ProductReducer = (currentProductsState = ProductState, action) => {

    if (action.type === ProductActions.GET_ALL_PRODUCTS) {
        return {
            ...currentProductsState,
            products: [
                {
                    id: 1,
                    name: "Samsung s20 Plus",
                    price: "$1200",
                    description: "Must have !!!"
                },
                {
                    id: 2,
                    name: "Samsung s20 Ultra",
                    price: "$2000",
                    description: "Must have !!!"
                }
            ]
        }
    }

    if(action.type === ProductActions.DELETE_ALL_PRODUCTS){
        return {
            ...currentProductsState,
            products: []
        }
    }

    return currentProductsState;
    
};

export default ProductReducer;
