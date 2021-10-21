import React, { Component } from "react";

class Country extends Component {
  render(props) {
    return (
      <>
        <img src={this.propndera} alt="Imagen de una bandera" />
        <h1>{this.props.nombrePais}</h1>
        <label>Population: {this.props.Population}</label>
      </>
    );
  }
}

export default Country;
