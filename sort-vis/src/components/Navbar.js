import React, { Component } from "react";
import "./Navbar.css";
const name = `<Algo-vis/>`;

export class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-class">
          <div className="container-fluid ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <a className="navbar-brand" href="/">
                <h1 className="brand">{name}</h1>
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
