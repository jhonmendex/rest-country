import React, { Component } from "react";

class Country extends Component {
  render(props) {
    return (
      <>
        <div className="country">
          <img src={this.props.bandera} alt="Imagen de una bandera" />
          <h1>{this.props.nombrePais}</h1>
          <label>Population: {this.props.Population}</label>
        </div>
      </>
    );
  }
}

export default Country;
