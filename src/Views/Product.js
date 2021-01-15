import React, { useRef } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import Communication from ".././Communication/Communication"
import { getTimeLeft, formatTimeLeft } from "../Utils/helpers"

const Product = () => {
  const { id } = useParams()
  const product = useSelector((state) =>
    state.ProductReducer.products.filter((product) => product.productID === id)
  )
  const timeLeft = formatTimeLeft(getTimeLeft(product[0].end_time))
  const bidRef = useRef(null)
  const bid = () => {
    Communication.Send(
      JSON.stringify({
        product: `${product[0].productID}`,
        bid_amount: `${bidRef.current.value}`,
        msg: "test msg",
        type: "BID_UP",
        user: "test user",
      })
    )
  }
  return (
    <div>
      {timeLeft ? (
        <>
          <p>
            TIME LEFT: days: {timeLeft.days}, hours: {timeLeft.hours}, minutes: {timeLeft.minutes}
          </p>
          <p>Current price: {product[0].currentProductPrice}</p>
          {product[0].productBids.map((bid, index) => {
            return (
              <div key={index}>
                {bid.userName} just bided {bid.userBid}
              </div>
            )
          })}
          <select ref={bidRef}>
            {product[0].availableBids.map((availableBid) => {
              return (
                <option value={availableBid} key={availableBid}>
                  {availableBid}
                </option>
              )
            })}
          </select>
          <button onClick={() => bid()}>Bid!</button>
        </>
      ) : (
        <>
          <p>Auction finished</p>
          <p>Sold for: {product[0].currentProductPrice}</p>
          <p>Sold to: {product[0].productBids[product[0].productBids.length - 1].userName}</p>
          <hr />
        </>
      )}
    </div>
  )
}

export default Product
