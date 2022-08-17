import React, { Component } from "react";
import "./SortVisualizer.css";
import * as mergesort from "../SortingAlgorithms/MergeSort.js";
import * as bubbleSort from "../SortingAlgorithms/BubbleSort.js";
import * as selectionsort from "../SortingAlgorithms/SelectionSort.js";
import * as quicksort from "../SortingAlgorithms/QuickSort.js";
import Intro from "./Intro.js";
import Visualizer from "./Visualizer.js";

// constants
var SIZE = 30;
var ANIMATION_SPEED = 250;

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
      mode: 0,
      comp: 0,
      sorting: false,
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
    let another_dup = this.state.array;
    const TIME = Date.now();
    const swaparr = mergesort.mergeSort([...another_dup]);
    let temp_arr = another_dup;
    for (let i = 0; i < swaparr.length; i++) {
      let pair = swaparr[i];
      setTimeout(() => {
        const dup = temp_arr;
        if (pair[2] == 1) {
          [dup[pair[0]], dup[pair[1]]] = [dup[pair[1]], dup[pair[0]]];
          this.setState({
            array: dup,
            left: pair[0],
            right: pair[1],
            swaps: this.state.swaps + 1,
            time: Date.now() - TIME,
            mode: pair[2],
            sorting: true,
          });
        } else if (pair[2] == 2) {
          this.setState({
            array: dup,
            left: pair[0],
            right: pair[1],
            comp: this.state.comp + 1,
            time: Date.now() - TIME,
            mode: pair[2],
            sorting: true,
          });
        }
        temp_arr = dup;
      }, i * ANIMATION_SPEED);
    }
    setTimeout(() => {
      this.setState({
        left: -1,
        right: -1,
        time: Date.now() - TIME,
        sorting: false,
      });
    }, swaparr.length * ANIMATION_SPEED);
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
        if (pair[2] == 1) {
          [dup[pair[0]], dup[pair[1]]] = [dup[pair[1]], dup[pair[0]]];
          this.setState({
            array: dup,
            left: pair[0],
            right: pair[1],
            swaps: this.state.swaps + 1,
            time: Date.now() - TIME,
            mode: pair[2],
            sorting: true,
          });
        } else if (pair[2] == 2) {
          this.setState({
            array: dup,
            left: pair[0],
            right: pair[1],
            comp: this.state.comp + 1,
            time: Date.now() - TIME,
            mode: pair[2],
            sorting: true,
          });
        }
        temp_arr = dup;
      }, i * ANIMATION_SPEED);
    }
    setTimeout(() => {
      this.setState({
        left: -1,
        right: -1,
        time: Date.now() - TIME,
        sorting: false,
      });
    }, swaparr.length * ANIMATION_SPEED);
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
        if (pair[2] == 1) {
          [dup[pair[0]], dup[pair[1]]] = [dup[pair[1]], dup[pair[0]]];
          this.setState({
            array: dup,
            left: pair[0],
            right: pair[1],
            swaps: this.state.swaps + 1,
            time: Date.now() - TIME,
            mode: pair[2],
            sorting: true,
          });
        } else if (pair[2] == 2) {
          this.setState({
            array: dup,
            left: pair[0],
            right: pair[1],
            comp: this.state.comp + 1,
            time: Date.now() - TIME,
            mode: pair[2],
            sorting: true,
          });
        }
        temp_arr = dup;
      }, i * ANIMATION_SPEED);
    }
    setTimeout(() => {
      this.setState({
        left: -1,
        right: -1,
        time: Date.now() - TIME,
        sorting: false,
      });
    }, swaparr.length * ANIMATION_SPEED);
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
        if (pair[2] == 1) {
          [dup[pair[0]], dup[pair[1]]] = [dup[pair[1]], dup[pair[0]]];
          this.setState({
            array: dup,
            left: pair[0],
            right: pair[1],
            swaps: this.state.swaps + 1,
            time: Date.now() - TIME,
            mode: pair[2],
            sorting: true,
          });
        } else if (pair[2] == 2) {
          this.setState({
            array: dup,
            left: pair[0],
            right: pair[1],
            comp: this.state.comp + 1,
            time: Date.now() - TIME,
            mode: pair[2],
            sorting: true,
          });
        }
        temp_arr = dup;
      }, i * ANIMATION_SPEED);
    }
    setTimeout(() => {
      this.setState({
        left: -1,
        right: -1,
        time: Date.now() - TIME,
        sorting: false,
      });
    }, swaparr.length * ANIMATION_SPEED);
  }

  reset() {
    const array = [];
    var min = 10;
    var max = 200;
    for (let i = 0; i < SIZE; ++i) {
      array.push(this.getrandom(min, max));
    }
    array.push(max);
    this.setState({
      array,
      intro: false,
      time: 0,
      swaps: 0,
      mode: 0,
      comp: 0,
      sorting: false,
    });
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          {!this.state.intro && (
            <div className="sliders">
              <div className="slidecontainer">
                <p className="stats-info" id="statinfo">
                  Speed :{" "}
                  <input
                    type="range"
                    min="100"
                    max="1000"
                    className="slides"
                    id="slide-width"
                    disabled={this.state.sorting}
                    onChange={(ele) => {
                      ANIMATION_SPEED = parseInt(ele.target.value);
                    }}
                  />
                </p>
              </div>
              <div className="slidecontainer">
                <p className="stats-info" id="statinfo">
                  Size :{" "}
                  <input
                    type="range"
                    min={1}
                    max={40}
                    className="slides"
                    id="slide-width"
                    disabled={this.state.sorting}
                    onChange={(ele) => {
                      SIZE = parseInt(ele.target.value);
                      this.reset();
                    }}
                  />
                </p>
              </div>
            </div>
          )}
          <div className="container pt-3 pb-3" id="grid">
            <button
              className="btn btns fifth text-light col"
              disabled={this.state.sorting}
              onClick={() => this.reset()}
            >
              reset
            </button>
            <button
              className="btn btns fifth text-light col"
              disabled={this.state.sorting}
              onClick={() => this.mergesort()}
            >
              Merge sort
            </button>
            <button
              className="btn btns fifth text-light col "
              disabled={this.state.sorting}
              onClick={() => this.bubblesort()}
            >
              Bubble Sort
            </button>
            <button
              className="btn  btns fifth text-light "
              disabled={this.state.sorting}
              onClick={() => this.selectionsort()}
            >
              Selection sort
            </button>
            <button
              className="btn  btns fifth text-light "
              disabled={this.state.sorting}
              onClick={() => this.quicksort()}
            >
              Quick sort
            </button>
          </div>

          {/* slider */}

          {this.state.intro && (
            <div className="container" style={{ display: "contents" }}>
              <Intro></Intro>
            </div>
          )}
          {!this.state.intro && (
            <div
              id="div-center"
              style={{ display: "contents" }}
              className="container"
            >
              {!this.state.intro && (
                <div className="stats">
                  <p className="stats-info" id="statinfo">
                    Array length = {this.state.array.length - 1}
                  </p>
                  <span className="stats-info" id="statinfo">
                    |
                  </span>
                  <p className="stats-info" id="statinfo">
                    Time = {this.state.time} Ms
                  </p>
                  <span className="stats-info" id="statinfo">
                    |
                  </span>
                  <p className="stats-info" id="statinfo">
                    Swaps = {this.state.swaps}
                  </p>
                  <span className="stats-info" id="statinfo">
                    |
                  </span>
                  <p className="stats-info" id="statinfo">
                    Comparisions = {this.state.comp}
                  </p>
                </div>
              )}
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
