import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
    console.log("Nav rendered");
    return (
      
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="index.html">
        WUSD VapeTracker{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
