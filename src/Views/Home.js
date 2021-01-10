import React, { useMemo, useRef, useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getEndingIn15Minutes, getFeatured } from "../Utils/helpers"
import SingleProduct from "../Components/SingleProduct"

const Home = () => {
  const [endingSoonProducts, setEndingSoonProducts] = useState([])
  const timeIntervalRef = useRef(null)
  const allProducts = useSelector((state) => state.ProductReducer.products)
  const featuredProducts = useMemo(() => getFeatured(allProducts), [allProducts])

  console.log("render")
  useEffect(() => {
    setEndingSoonProducts(() => {
      return getEndingIn15Minutes(allProducts)
    })
    timeIntervalRef.current = setInterval(() => {
      setEndingSoonProducts(() => {
        return getEndingIn15Minutes(allProducts)
      })
    }, 60000)
    return () => {
      clearInterval(timeIntervalRef.current)
    }
  }, [allProducts])

  return (
    <div className="home-content" style={{ width: "80%", margin: "auto" }}>
      <section className="last-minute" style={{ margin: "3em 0em" }}>
        <h3 style={{ margin: "3em", textAlign: "center" }}>Auction ending soon!</h3>
        <ul style={{ display: "flex", justifyContent: "space-between" }}>
          {endingSoonProducts.map((product) => {
            return <SingleProduct key={product.productID} {...product}></SingleProduct>
          })}
        </ul>
      </section>
      <hr />
      <section className="featured">
        <h3 style={{ margin: "3em", textAlign: "center" }}>Featured</h3>
        <ul style={{ display: "flex", justifyContent: "space-between" }}>
          {featuredProducts.map((product) => {
            return <SingleProduct key={product.productID} {...product}></SingleProduct>
          })}
        </ul>
      </section>
    </div>
  )
}

export default Home
