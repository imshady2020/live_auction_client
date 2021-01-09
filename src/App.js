import React, { useEffect } from "react"
import Communication from "./Communication/Communication"
import { useSelector } from "react-redux"

function App() {
  console.log("rerender")
  const state = useSelector((state) => state.ProductReducer.products)
  console.log(state)

  const kliknuo = () => {
    Communication.Send(
      JSON.stringify({
        type: "message",
        msg: "Moram da ti kazem da si doktor",
        user: "Marko Taskovic",
      })
    )
  }
  useEffect(() => {
    const cleanup = () => {
      Communication.Disconnect()
    }
    return () => {
      cleanup()
    }
  }, [])

  return (
    <div>
      <h1>Mora se radi</h1>
      <button onClick={kliknuo}>Sad cu da klinem</button>
    </div>
  )
}

export default App
