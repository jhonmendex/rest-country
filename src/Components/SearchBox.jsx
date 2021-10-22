import React, { Component } from "react";

class Searchbox extends Component {
  render() {
    return (
      <>
        <div className="search-box-container">
          <div className="search-box">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search for a country" />
          </div>
        </div>
      </>
    );
  }
}

export default Searchbox;
