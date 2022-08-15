import React, { Component } from "react";
import "./SortVisualizer.css";
import * as mergesort from "../SortingAlgorithms/MergeSort.js";
import * as bubbleSort from "../SortingAlgorithms/BubbleSort.js";
import * as selectionsort from "../SortingAlgorithms/SelectionSort.js";
import * as quicksort from "../SortingAlgorithms/QuickSort.js";
import Intro from "./Intro.js";
import Visualizer from "./Visualizer.js";

export default class SortVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      left: -1,
      right: -1,
      intro: true,
      time: 0,
      swaps: 0,
      size: 30,
    };
  }

  componentDidMount() {
    // this.reset();
  }

  getrandom(min, max) {
    const random = Math.floor(Math.random() * (max - min)) + min;
    return random;
  }

  mergesort() {
    const ret = mergesort.mergesort(this.state.array);
    this.setState({
      array: ret,
    });
  }

  bubblesort() {
    let another_dup = this.state.array;
    const TIME = Date.now();
    const swaparr = bubbleSort.bubbleSort([...another_dup]);

    let temp_arr = another_dup;
    for (let i = 0; i < swaparr.length; i++) {
      let pair = swaparr[i];
      setTimeout(() => {
        const dup = temp_arr;
        [dup[pair[0]], dup[pair[1]]] = [dup[pair[1]], dup[pair[0]]];
        this.setState({
          array: dup,
          left: pair[0],
          right: pair[1],
          swaps: this.state.swaps + 1,
          time: Date.now() - TIME,
        });
        temp_arr = dup;
      }, i * 300);
    }
    setTimeout(() => {
      this.setState({
        left: -1,
        right: -1,
        time: Date.now() - TIME,
      });
    }, swaparr.length * 300);
  }

  selectionsort() {
    const another_dup = this.state.array;
    const swaparr = selectionsort.SelectionSort([...another_dup]);
    const TIME = Date.now();

    let temp_arr = another_dup;
    for (let i = 0; i < swaparr.length; i++) {
      let pair = swaparr[i];
      setTimeout(() => {
        const dup = temp_arr;
        [dup[pair[0]], dup[pair[1]]] = [dup[pair[1]], dup[pair[0]]];
        this.setState({
          array: dup,
          left: pair[0],
          right: pair[1],
          swaps: this.state.swaps + 1,
          time: Date.now() - TIME,
        });
        temp_arr = dup;
      }, i * 150);
    }
    setTimeout(() => {
      this.setState({
        left: -1,
        right: -1,
        time: Date.now() - TIME,
      });
    }, swaparr.length * 150);
  }

  quicksort() {
    const another_dup = this.state.array;
    let len = another_dup.length;
    const swaparr = quicksort.quickSort([...another_dup], 0, len - 1);
    const TIME = Date.now();

    let temp_arr = another_dup;
    for (let i = 0; i < swaparr.length; i++) {
      let pair = swaparr[i];
      setTimeout(() => {
        const dup = temp_arr;
        [dup[pair[0]], dup[pair[1]]] = [dup[pair[1]], dup[pair[0]]];
        this.setState({
          array: dup,
          left: pair[0],
          right: pair[1],
          swaps: this.state.swaps + 1,
          time: Date.now() - TIME,
        });
        temp_arr = dup;
      }, i * 150);
    }
    setTimeout(() => {
      this.setState({
        left: -1,
        right: -1,
        time: Date.now() - TIME,
      });
    }, swaparr.length * 150);
  }

  reset() {
    const array = [];
    const min = 10;
    const max = 200;
    for (let i = 0; i < this.state.size; ++i) {
      array.push(this.getrandom(min, max));
    }
    this.setState({
      array,
      intro: false,
      time: 0,
      swaps: 0,
    });
  }

  render() {
    console.log(this.state.intro);
    return (
      <div>
        <div className="container-fluid">
          {!this.state.intro && (
            <div className="sliders">
              <div>
                <p className="stats-info">
                  Speed : <input type="range" max="100" />
                </p>
              </div>
              <div>
                <p className="stats-info">
                  Size :
                  <input
                    type="range"
                    min="1"
                    max="40"
                    onChange={(ele) => {
                      this.setState({
                        size: parseInt(ele.target.value),
                      });
                      this.reset();
                    }}
                  />
                </p>
              </div>
            </div>
          )}
          <div className="d-flex justify-content-evenly pt-3">
            <button
              className="btn btns fifth text-light"
              onClick={() => this.reset()}
            >
              reset
            </button>
            <button
              className="btn  btns fifth text-light"
              onClick={() => this.mergesort()}
            >
              Merge sort
            </button>
            <button
              className="btn  btns fifth text-light"
              onClick={() => this.bubblesort()}
            >
              Bubble sort
            </button>
            <button
              className="btn  btns fifth text-light"
              onClick={() => this.selectionsort()}
            >
              Selection sort
            </button>
            <button
              className="btn  btns fifth text-light"
              onClick={() => this.quicksort()}
            >
              Quick sort
            </button>
          </div>

          {/* slider */}
          {!this.state.intro && (
            <div className="stats">
              <p className="stats-info">
                Array length = {this.state.array.length}
              </p>
              <span className="stats-info">|</span>
              <p className="stats-info">Time = {this.state.time} Ms</p>
              <span className="stats-info">|</span>

              <p className="stats-info">Swaps = {this.state.swaps}</p>
            </div>
          )}

          {this.state.intro && (
            <div className="container" style={{ display: "contents" }}>
              <Intro></Intro>
            </div>
          )}
          {!this.state.intro && (
            <div className="container" style={{ display: "contents" }}>
              <Visualizer
                array={this.state.array}
                left={this.state.left}
                right={this.state.right}
                mode={this.state.mode}
              ></Visualizer>
            </div>
          )}
        </div>
      </div>
    );
  }
}
