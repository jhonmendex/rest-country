import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="nav-bar">
          <Link to="/">
            <span>Countries</span>
          </Link>
          <Link to="/about">
            <span>About</span>
          </Link>
          <Link to="/datos">
            <span>Datos</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
