import React from "react";
import "./styles/Country.css";
import Searchbox from "./SearchBox";
import Country from "./Country";

import { countries } from "../Services/countries";

const ListCountries = () => {
  return (
    <>
      {countries.map((data, id) => {
        return (
          <div id={id} key={id}>
            <Country
              nombrePais={data.nombre}
              bandera={data.bandera}
              poblacion={data.poblacion}
            />
            <button>Agregar al carrito</button>
          </div>
        );
      })}
    </>
  );
};

class CountryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }
  componentDidMount() {
    this.consultaPaises();
  }

  consultaPaises = async () => {
    try {
      const res = await fetch("http://localhost:3000/countries.json");
      const data = await res.json();
      this.setState({ data: data });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Searchbox />
        <div className="country-container">
          <ListCountries />
        </div>
      </>
    );
  }
}

export default CountryContainer;

// <ListCountries datos={this.state.data} />
