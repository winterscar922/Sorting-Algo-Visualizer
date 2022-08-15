import React, { Component } from "react";
import "./SortVisualizer.css";

export class Visualizer extends Component {
  render() {
    return (
      <div>
        {this.props.array.map((value, indx) => {
          if (indx == this.props.left || indx == this.props.right) {
            return (
              <div
                className="bars"
                key={indx}
                style={{
                  height: `${value}px`,
                  // "#502064"
                  backgroundColor: "#502064",
                  boxSizing: "border-box",
                  border: "2px solid #0078AA",
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
                  // "#00EAD3"
                  backgroundColor: "#00EAD3",
                  boxSizing: "border-box",
                  border: "2px solid #0078AA",
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
