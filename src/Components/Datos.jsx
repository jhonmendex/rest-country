import React, { Component } from "react";

class Datos extends Component {
  constructor(props) {
    super(props);
    this.state = { datos: [] };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://localhost:5000/api/empleado")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ datos: data });
      });
  }

  borrarEmpleado(id) {
    fetch("http://localhost:5000/api/empleado/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        alert("dato eliminado");
      });
  }

  render() {
    return this.state.datos.map((data) => {
      return (
        <li key={data.id}>
          Nombre: <i>{data.nombre}</i> Apellido <i>{data.apellido}</i>{" "}
          <button onClick={() => this.borrarEmpleado(data.id)}>Eliminar</button>
        </li>
      );
    });
  }
}

export default Datos;
