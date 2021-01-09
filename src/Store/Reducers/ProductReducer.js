import { ProductActions } from "./../Actions/ProductActions" // Actions related to Product

const ProductState = {
  products: [
    {
      productID: "Product ID",
      productCategoryName: "Product Category",
      productCategoryID: "Product Category ID",
      productName: "Product Name",
      productAlias: "Product-Name",
      productDescription: "ProductDescription",
      productImages: ["images/category/product/image1.png", "images/category/product/image2.png"],
      currentProductPrice: "Current Product Price",
      availableCurrency: ["RSD", "EUR", "USD", "GBR"],
      availableBids: [100, 200, 500, 1000, 2000, 5000],
      canPlaceBid: false || true,
      productBids: [
        {
          userId: "User ID",
          userName: "User Name",
          userBig: "User Bid",
        },
      ],
    },
  ],
}

// Product Reducer
const ProductReducer = (currentProductsState = ProductState, action) => {
  const { type, payload } = action
  switch (type) {
    case ProductActions.GET_ALL_PRODUCTS:
      const noviState = JSON.parse(JSON.stringify(currentProductsState)) //pravi se deep copy da bi rerenderovao komponente koje koriste ovo iz store-a
      noviState.products.push(payload)
      return { ...noviState }
    default:
      return { ...currentProductsState }
  }
}

export default ProductReducer
