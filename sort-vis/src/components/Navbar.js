import React, { Component } from "react";
import "./Navbar.css";
const name = `<Algo-vis/>`;

export class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar" id="nav">
          <div
            className="container-fluid justify-content-center"
            id="navbarNav"
          >
            <a className="navbar-brand" href="/">
              <h1 className="brand">{name}</h1>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
