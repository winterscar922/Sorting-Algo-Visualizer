import React, { Component } from "react";

export class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <h1 className="justify-content-center heading">Sorting Algorithms</h1>
        <p className="para">
          Sorting algorithms are used to sort a data structure according to a
          specific order relationship, such as numerical order or
          lexicographical order.
        </p>
        <p className="para">
          This operation is one of the most important and widespread in computer
          science. For a long time, new methods have been developed to make this
          procedure faster and faster.
        </p>
        <p className="para">
          There are currently hundreds of different sorting algorithms, each
          with its own specific characteristics. They are classified according
          to two metrics: space complexity and time complexity.
        </p>
        <p className="para">
          Those two kinds of complexity are represented with
          <a href="https://www.programiz.com/dsa/asymptotic-notations#:~:text=Asymptotic%20notations%20are%20the%20mathematical,linear%20i.e.%20the%20best%20case.">
            asymptotic notations
          </a>
          , mainly with the symbols O, Θ, Ω, representing respectively the upper
          bound, the tight bound, and the lower bound of the algorithm's
          complexity, specifying in brackets an expression in terms of n, the
          number of the elements of the data structure.
        </p>
        <p className="categories">Most of them fall into two categories:</p>
        <p className="categories points">
          Logarithmic The complexity is proportional to the binary logarithm
          (i.e to the base 2) of n.<br></br> An example of a logarithmic sorting
          algorithm is Quick sort, with space and time complexity O(n × log n).
        </p>
        <p className="categories points">
          Quadratic The complexity is proportional to the square of n. An
          example of a quadratic sorting algorithm is Bubble sort, with a time
          complexity of O(n2).
        </p>
        <p className="categories">
          Space and time complexity can also be further subdivided into 3
          different cases: best case, average case and worst case.
        </p>
        <p className="para">
          Sorting algorithms can be difficult to understand and it's easy to get
          confused. We believe visualizing sorting algorithms can be a great way
          to better understand their functioning while having fun!
        </p>
      </div>
    );
  }
}

export default Intro;
