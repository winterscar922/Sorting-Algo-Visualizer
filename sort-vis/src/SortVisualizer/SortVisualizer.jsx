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
        });
        temp_arr = dup;
      }, i * 300);
    }
    setTimeout(() => {
      this.setState({
        left: -1,
        right: -1,
      });
    }, swaparr.length * 300);
  }

  selectionsort() {
    const another_dup = this.state.array;
    const swaparr = selectionsort.SelectionSort([...another_dup]);
    // console.log(swaparr);
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
        });
        temp_arr = dup;
      }, i * 150);
    }
    setTimeout(() => {
      this.setState({
        left: -1,
        right: -1,
      });
    }, swaparr.length * 150);
  }

  quicksort() {
    const another_dup = this.state.array;
    let len = another_dup.length;
    const swaparr = quicksort.quickSort([...another_dup], 0, len - 1);
    // console.log(swaparr);
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
        });
        temp_arr = dup;
      }, i * 150);
    }
    setTimeout(() => {
      this.setState({
        left: -1,
        right: -1,
      });
    }, swaparr.length * 150);
  }

  reset() {
    const array = [];
    const min = 10;
    const max = 200;
    for (let i = 0; i < 30; ++i) {
      array.push(this.getrandom(min, max));
    }
    this.setState({
      array,
      intro: false,
    });
  }

  render() {
    console.log(this.state.intro);
    return (
      <div>
        <div className="container-fluid">
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
          {this.state.intro && (
            <div className="container" style={{ display: "contents" }}>
              <Intro></Intro>
            </div>
          )}
          {!this.state.intro && (
            <div className="container">
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
