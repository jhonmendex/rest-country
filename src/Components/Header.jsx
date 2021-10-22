import React from "react";
import Navbar from "./Navbar";
import "./styles/Header.css";
class Header extends React.Component {
  componentDidMount() {
    fetch("datos.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  }

  render() {
    return (
      <>
        <div className="header">
          <div className="header-container">
            <h2>Where in the Word?</h2>
            <Navbar />
          </div>
        </div>
      </>
    );
  }
}

export default Header;
