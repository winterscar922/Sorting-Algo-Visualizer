import React, { Component } from "react";
import "./SortVisualizer.css";

export class Visualizer extends Component {
  render() {
    const len = this.props.array.length;
    return (
      <div className="BARS">
        {this.props.array.map((value, indx) => {
          if (indx == len - 1) {
            return (
              <div
                className="bars"
                key={indx}
                style={{
                  height: `${value}px`,
                  // "#502064"
                  backgroundColor: "#393e46",
                }}
              ></div>
            );
          }
          if (indx === this.props.left || indx === this.props.right) {
            if (this.props.mode === 1) {
              return (
                <div
                  className="bars"
                  key={indx}
                  style={{
                    height: `${value}px`,
                    // "#502064"
                    backgroundColor: "#FB9A40",
                    boxSizing: "border-box",
                    borderRight: "5px solid  #F7ECDE",
                    // border: "2px solid #0078AA",
                  }}
                ></div>
              );
            } else {
              return (
                <div
                  className="bars"
                  key={indx}
                  style={{
                    height: `${value}px`,
                    // "#502064"
                    backgroundColor: "#502064",
                    boxSizing: "border-box",
                    // border: "2px solid #0078AA",
                    borderRight: "5px solid  #F7ECDE",
                  }}
                ></div>
              );
            }
          } else {
            return (
              <div
                className="bars"
                key={indx}
                style={{
                  height: `${value}px`,
                  // "#00EAD3"
                  backgroundColor: "#00EAD3",
                  boxSizing: "border-box",
                  // border: "2px solid #0078AA",
                  borderRight: "5px solid  #F7ECDE",
                }}
              ></div>
            );
          }
        })}
      </div>
    );
  }
}

export default Visualizer;
