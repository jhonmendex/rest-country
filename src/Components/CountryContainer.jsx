import React from "react";
import Country from "./Country";
import Germany from "../images/germany.png";
import EEUU from "../images/eeuu.png";
import Brazil from "../images/brazil.png";
import { Link } from "react-router-dom";
const estilos = {
  titulo: {
    color: "red",
  },
};

class CountryContainer extends React.Component {
  render() {
    return (
      <>
        <Country nombrePais="Germany" bandera={Germany} Population="8200000" />
        <Country
          nombrePais="United states of america"
          bandera={EEUU}
          Population="323000000"
        />
        <Country nombrePais="Brazil" bandera={Brazil} Population="206000000" />
        <button>
          <Link to="/cualquiercosa">About</Link>
        </button>
      </>
    );
  }
}

export default CountryContainer;
