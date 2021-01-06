import React from "react";
import  Communication  from "./Communication/Communication";
import { connect } from 'react-redux';
import { ProductActions } from './Store/Actions/ProductActions';
import Event from './EventSystem/Event';

function App(props) {

  const kliknuo = () => {

    Communication.Send(JSON.stringify({
        type: "message",
        msg: "Moram da ti kazem da si doktor",
        user: "Marko Taskovic"
    }));
    Event.Emit("jako");
  }

  return (

    <div>

      <h1>Mora se radi</h1>
      <button onClick={kliknuo}>Sad cu da klinem</button>
      <button onClick={props.setProducts}>Ubaci proizvod</button>
      <button onClick={props.deleteProducts}>Obrisi proizvode</button>
      {/* <button onClick={paliEvent}>Opali Event</button> */}

      { console.log(props.test) }

    </div>
  
  );

}

const mapStateToProps = (state) => {
  return {
    allProducts: state.ProductReducer.products,
    test: state.ProductReducer.pro
  };
};

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