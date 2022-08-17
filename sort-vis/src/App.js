import logo from "./logo.svg";
import "./App.css";
import SortVisualizer from "./SortVisualizer/SortVisualizer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
      </BrowserRouter>
      <SortVisualizer></SortVisualizer>
      <Footer></Footer>
    </div>
  );
}

export default App;
