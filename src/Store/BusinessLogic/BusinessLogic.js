import store from ".././Store"
import { ProductActions } from "../Actions/ProductActions"

export class ProcessData {
  static getAllProducts(data) {
    //neka obrada

    const noviObjekat = {
      productID: "Product ID 2",
      productCategoryName: "Product Category 2",
      productCategoryID: "Product Category ID 2",
      productName: "Product Name 2",
      productAlias: "Product-Name 2 ",
      productDescription: "ProductDescription 2",
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
    }

    store.dispatch({ type: ProductActions.GET_ALL_PRODUCTS, payload: noviObjekat })
  }
  static test(payload) {
    store.dispatch({ type: "TEST", payload })
  }
}
