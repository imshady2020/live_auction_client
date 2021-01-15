import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <ul
        style={{ display: "flex", justifyContent: "space-between", width: "80%", margin: "auto" }}
      >
        <Link to="/">
          <li>Products</li>
        </Link>
        <li>Profile</li>
        <li>Notifications</li>
      </ul>
    </nav>
  )
}

export default Navbar
