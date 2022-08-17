import React, { Component } from "react";
import "./Navbar.css";

export class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <footer className="font-small blue">
          <p className="footerinfo text-dark">
            Developed by Sumukha T.S |{" "}
            <a
              href="https://github.com/winterscar922"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <u>Github</u>
              </span>
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default Footer;
