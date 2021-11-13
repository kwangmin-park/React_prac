import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';
import Say from './ch4/Say';
import EventPractice from "./ch4/EventPractice";
import ImmerComponent from "./ch11/ImmerComponent";
import AxiosPrac from "./ch14/AxiosPrac";
import axios from "axios";

function App() {
  return (
      <AxiosPrac></AxiosPrac>

      // <ImmerComponent/>
      // <EventPractice />
      // <Say></Say>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
