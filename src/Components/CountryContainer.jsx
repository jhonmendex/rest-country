import React from "react";
import "./styles/Country.css";
import Searchbox from "./SearchBox";
import Country from "./Country";
import Brazil from "../images/brazil.png";
import Germany from "../images/germany.png";
import EEUU from "../images/eeuu.png";
const ListCountries = (props) => {
  return (
    <>
      <Country bandera={Brazil} nombrePais="brazil" poblacion="25000000" />
      <Country bandera={Germany} nombrePais="Alemania" poblacion="25000000" />
      <Country bandera={EEUU} nombrePais="EE UU" poblacion="25000000" />
    </>
  );
};

class CountryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.fetchQuery();
  }

  fetchQuery = async () => {
    try {
      const res = await fetch("http://localhost:3000/countries.json");
      const data = await res.json();
      this.setState({ data: JSON.stringify(data) });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Searchbox />
        <div className="country-container">
          <ListCountries datos={this.state.data} />
        </div>
      </>
    );
  }
}

export default CountryContainer;
