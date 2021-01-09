import React, { useEffect } from "react"
import Communication from "./Communication/Communication"
import { /*useSelector,*/ useDispatch /*shallowEqual*/ } from "react-redux"
import { ProductActions } from "./Store/Actions/ProductActions"

function App() {
  const dispatch = useDispatch()
  const setProducts = () => {
    dispatch({
      type: ProductActions.GET_ALL_PRODUCTS,
    })
  }
  const deleteProducts = () => {
    dispatch({
      type: ProductActions.DELETE_ALL_PRODUCTS,
    })
  }
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
      <button onClick={setProducts}>Ubaci proizvod</button>
      <button onClick={deleteProducts}>Obrisi proizvode</button>
    </div>
  )
}

export default App
