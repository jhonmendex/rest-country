import React from "react";
import Country from "./Country";
import Germany from "../images/germany.png";
import EEUU from "../images/eeuu.png";
import Brazil from "../images/brazil.png";
import "./styles/Country.css";
import Searchbox from "./SearchBox";

class CountryContainer extends React.Component {
  render() {
    return (
      <>
        <Searchbox />
        <div className="country-container">
          <Country
            nombrePais="Germany"
            bandera={Germany}
            Population="8200000"
          />
          <Country
            nombrePais="United states of america"
            bandera={EEUU}
            Population="323000000"
          />
          <Country
            nombrePais="Brazil"
            bandera={Brazil}
            Population="206000000"
          />
          <Country
            nombrePais="Brazil"
            bandera={Brazil}
            Population="206000000"
          />
          <Country
            nombrePais="Brazil"
            bandera={Brazil}
            Population="206000000"
          />
          <Country
            nombrePais="Brazil"
            bandera={Brazil}
            Population="206000000"
          />
          <Country
            nombrePais="Brazil"
            bandera={Brazil}
            Population="206000000"
          />
          <Country
            nombrePais="Brazil"
            bandera={Brazil}
            Population="206000000"
          />
          <Country
            nombrePais="Brazil"
            bandera={Brazil}
            Population="206000000"
          />
        </div>
      </>
    );
  }
}

export default CountryContainer;
