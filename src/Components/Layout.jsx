import React from "react";
import Header from "./Header";
import Footer from "./Footer";
function Layout(props) {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="container">{props.children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
