import React from "react"
import { useParams } from "react-router-dom"
import { useSelector, shallowEqual } from "react-redux"

const Product = () => {
  const { id } = useParams()
  const product = useSelector((state) =>
    state.ProductReducer.products.filter((product) => product.productID === id)
  )

  console.log(product)
  return <div>{product[0].currentProductPrice}</div>
}

export default Product
