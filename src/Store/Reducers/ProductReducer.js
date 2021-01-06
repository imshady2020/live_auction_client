import { ProductActions } from './../Actions/ProductActions'; // Actions related to Product

const ProductState = {
    products: [
        {
            productID: "Product ID",
            productCategoryName: "Product Category",
            productCategoryID: "Product Category ID",
            productName: "Product Name",
            productAlias: "Product-Name",
            productDescription: "ProductDescription",
            productImages: [
                "images/category/product/image1.png",
                "images/category/product/image2.png"
            ],
            currentProductPrice: "Current Product Price",
            availableCurrency: ["RSD", "EUR", "USD", "GBR"],
            availableBids: [100, 200, 500, 1000, 2000, 5000],
            canPlaceBid: false || true,
            productBids: [
                {
                    userId: "User ID",
                    userName: "User Name",
                    userBig: "User Bid"
                }
            ]
        }
    ]
};

// Product Reducer
const ProductReducer = (currentProductsState = ProductState, action) => {

    if (action.type === ProductActions.GET_ALL_PRODUCTS) {
        return {
            ...currentProductsState,
            products: []
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
