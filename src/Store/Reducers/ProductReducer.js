import { ProductActions } from "./../Actions/ProductActions" // Actions related to Product
import moment from "moment"
const ProductState = {
  products: [
    {
      productID: "1",
      productCategoryName: "Basket8all Cards",
      productCategoryID: "1",
      productName: "Michael Jordan Rookie",
      productAlias: "Fleer 86",
      productDescription: "1986 Fleer #57 Michael Jordan Rookie Card",
      productImages: [
        "https://www.pngitem.com/pimgs/m/70-703952_iphone-6-plus-smartphone-mobile-phone-device-icon.png",
        "https://cdn2.iconfinder.com/data/icons/gps-navigation-1/64/gps-travel-mobile_map-map_location-placeholder-mobile_phone-smartphone-geolocalization-pin-signs-512.png",
      ],
      currentProductPrice: 250,000.00,
      availableCurrency: ["RSD", "EUR", "USD", "GBR"],
      availableBids: [100, 200, 500, 1000, 2000, 5000],
      canPlaceBid: false || true,
      featured: true,
      start_time: "",
      end_time: moment().add(12, "minutes").format("YYYY-MM-DD HH:mm"),
      productBids: [
        {
          userId: "User ID",
          userName: "User Name",
          userBid: "User Bid",
        },
      ],
    },
    {
      productID: "2",
      productCategoryName: "devices",
      productCategoryID: "1",
      productName: "tv",
      productAlias: "television",
      productDescription: "device for zaglupljivanje",
      productImages: [
        "https://www.pngitem.com/pimgs/m/70-703952_iphone-6-plus-smartphone-mobile-phone-device-icon.png",
        "https://cdn2.iconfinder.com/data/icons/gps-navigation-1/64/gps-travel-mobile_map-map_location-placeholder-mobile_phone-smartphone-geolocalization-pin-signs-512.png",
      ],
      currentProductPrice: 600,
      availableCurrency: ["RSD", "EUR", "USD", "GBR"],
      availableBids: [100, 200, 500, 1000, 2000, 5000],
      canPlaceBid: false || true,
      featured: false,
      start_time: "",
      end_time: moment().add(14, "minutes").format("YYYY-MM-DD HH:mm"),
      productBids: [
        {
          userId: "User ID",
          userName: "User Name",
          userBid: "User Bid",
        },
      ],
    },
    {
      productID: "3",
      productCategoryName: "devices",
      productCategoryID: "1",
      productName: "nokia",
      productAlias: "phone",
      productDescription: "device for communication",
      productImages: [
        "https://www.pngitem.com/pimgs/m/70-703952_iphone-6-plus-smartphone-mobile-phone-device-icon.png",
        "https://cdn2.iconfinder.com/data/icons/gps-navigation-1/64/gps-travel-mobile_map-map_location-placeholder-mobile_phone-smartphone-geolocalization-pin-signs-512.png",
      ],
      currentProductPrice: 800,
      availableCurrency: ["RSD", "EUR", "USD", "GBR"],
      availableBids: [100, 200, 500, 1000, 2000, 5000],
      canPlaceBid: false || true,
      featured: false,
      start_time: "",
      end_time: moment().add(2, "minutes").format("YYYY-MM-DD HH:mm"),
      productBids: [
        {
          userId: "User ID",
          userName: "User Name",
          userBid: "User Bid",
        },
      ],
    },
    {
      productID: "4",
      productCategoryName: "vehicles",
      productCategoryID: "2",
      productName: "motorbike",
      productAlias: "motorbike",
      productDescription: "moz da muvas zenske sa ovim i da se vozis po grad",
      productImages: [
        "https://www.mvagusta.com/images/main/f3.png",
        "https://assets.newatlas.com/dims4/default/ab2c700/2147483647/strip/true/crop/2000x1333+0+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F8d%2Fca%2F6a5d0a4646689e691458e79290a6%2Frush.png",
      ],
      currentProductPrice: 4300,
      availableCurrency: ["RSD", "EUR", "USD", "GBR"],
      availableBids: [100, 200, 500, 1000, 2000, 5000],
      canPlaceBid: false || true,
      featured: true,
      start_time: "",
      end_time: moment().add(2, "days").format("YYYY-MM-DD HH:mm"),
      productBids: [
        {
          userId: "User ID",
          userName: "User Name",
          userBid: "User Bid",
        },
      ],
    },
    {
      productID: "5",
      productCategoryName: "vehicles",
      productCategoryID: "2",
      productName: "car",
      productAlias: "car",
      productDescription: "moz da ides na poso sa ovim",
      productImages: [
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bugatti-chiron-pur-sport-106-1582836604.jpg",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bugatti-chiron-pur-sport-106-1582836604.jpg",
      ],
      currentProductPrice: 5400,
      availableCurrency: ["RSD", "EUR", "USD", "GBR"],
      availableBids: [100, 200, 500, 1000, 2000, 5000],
      canPlaceBid: false || true,
      featured: true,
      start_time: "",
      end_time: moment().subtract(823, "minutes").format("YYYY-MM-DD HH:mm"),
      productBids: [
        {
          userId: "User ID",
          userName: "User Name",
          userBid: "User Bid",
        },
      ],
    },
  ],
}

// Product Reducer
const ProductReducer = (currentProductsState = ProductState, action) => {
  const { type, payload } = action
  let temp_products // temporary variable for making deep copy of currentProductsState
  switch (type) {
    case ProductActions.GET_ALL_PRODUCTS:
      temp_products = JSON.parse(JSON.stringify(currentProductsState)) //making deep copy so that Components that use useSelector would rerender if state changes
      temp_products.products.push(payload)
      return { ...currentProductsState, ...temp_products }

    case ProductActions.CHANGE_PRODUCT_VALUE:
      temp_products = JSON.parse(JSON.stringify(currentProductsState))
      temp_products.products.map((product) => {
        if (product.productID === payload.product) {
          product.productBids = [
            ...product.productBids,
            { userId: "user ID", userName: payload.user, userBid: payload.bid_amount },
          ]
          product.currentProductPrice = product.currentProductPrice + Number(payload.bid_amount)
          return null
        } else {
          return null
        }
      })

      return { ...currentProductsState, ...temp_products }
    default:
      return { ...currentProductsState }
  }
}

export default ProductReducer
