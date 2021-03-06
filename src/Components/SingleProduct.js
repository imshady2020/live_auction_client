import React, { useState } from "react"
import { getTimeLeft, formatTimeLeft } from "../Utils/helpers"
import { Link } from "react-router-dom"
import Communication from ".././Communication/Communication"

const SingleProduct = ({
  productID,
  productCategoryName,
  productName,
  productDescription,
  productImages,
  currentProductPrice,
  availableBids,
  canPlaceBid,
  end_time,
  productBids,
}) => {
  const [selectedBid, setSelectedBid] = useState(availableBids[0])
  const timeLeft = formatTimeLeft(getTimeLeft(end_time))
  const bid = () => {
    Communication.Send(
      JSON.stringify({
        product: `${productID}`,
        bid_amount: `${selectedBid}`,
        msg: "test msg",
        type: "BID_UP",
        user: "test user",
      })
    )
  }
  return (
    <li>
      <h3>{productName}</h3>
      <Link to={productID}>
        <img src={productImages[0]} alt={productName} style={{ width: "120px", height: "120px" }} />
      </Link>

      {timeLeft ? (
        <>
          <h3>Last bid: {currentProductPrice}</h3>
          <h5>
            time left: days: {timeLeft.days}, hours: {timeLeft.hours}, minutes: {timeLeft.minutes}
          </h5>
          <select onChange={(e) => setSelectedBid(Number(e.target.value))}>
            {availableBids.map((availableBid) => {
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
          <h5>Sold for: {currentProductPrice}</h5>
          <p>Auction finished</p>
        </>
      )}
    </li>
  )
}
SingleProduct.defaultProps = {
  productCategoryName: "n/a",
  productName: "n/a",
  productDescription: "n/a",
  productImages: [
    "https://image.shutterstock.com/image-vector/no-image-available-sign-absence-260nw-373243873.jpg",
  ],
  currentProductPrice: "n/a",
  availableBids: ["n/a"],
  canPlaceBid: false,
  end_time: "n/a",
  productBids: ["n/a"],
}
export default SingleProduct
