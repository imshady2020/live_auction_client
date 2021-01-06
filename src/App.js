import React from "react";
import  Communication  from "./Communication/Communication";
import { connect } from 'react-redux';
import { ProductActions } from './Store/Actions/ProductActions';

function App(props) {


  /**
   * Test fn
   */
  const kliknuo = () => {
    Communication.Send(JSON.stringify({
        type: "message",
        msg: "Moram da ti kazem da si doktor",
        user: "Marko Taskovic"
    }));
  }

  return (

    <div>

      <h1>Mora se radi</h1>
      <button onClick={kliknuo}>Sad cu da klinem</button>
      <button onClick={props.setProducts}>Ubaci proizvod</button>
      <button onClick={props.deleteProducts}>Obrisi proizvode</button>

    </div>
  
  );

}


/**
 * This function returns all states from redux store and translate to props how we can have access
 * @param state     - this is immutable state form redux store
 */
const mapStateToProps = (state) => {
  return {
    allProducts: state.ProductReducer.products
  };
};


/**
 * This function dispatch user actions and store data
 * @param dispatch  - redux callback parameter for dispatching actions 
 */
const mapDispatchToProps = (dispatch) => {
	return {
		setProducts: () => {
      dispatch({ 
        type: ProductActions.GET_ALL_PRODUCTS 
      });
    },
    deleteProducts: () => {
      dispatch({
        type: ProductActions.DELETE_ALL_PRODUCTS
      });
    }
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(App);