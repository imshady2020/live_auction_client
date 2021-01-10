import React from "react"

const Navbar = () => {
  return (
    <nav>
      <ul
        style={{ display: "flex", justifyContent: "space-between", width: "80%", margin: "auto" }}
      >
        <li>Products</li>
        <li>Profile</li>
        <li>Notifications</li>
      </ul>
    </nav>
  )
}

export default Navbar
