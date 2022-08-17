import React, { Component } from "react";
import "./Navbar.css";

export class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <footer className="page-footer font-small blue">
          <div className=" text-dark py-1">
            <p className="footerinfo">Developed by Sumukha T S</p>
            <a
              href="https://github.com/winterscar922"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
