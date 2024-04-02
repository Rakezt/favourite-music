import React, { useState } from "react";
import "./App.css";
import { topSongs } from "./data";

export default function App() {
  const [select, setSelect] = useState("pop");

  function changeHandler(item) {
    setSelect(item);
  }

  return (
    <div className="App">
      <div className="cover">
        <div className="nav">
          <h1>BillBoard Top Song</h1>
          <h2>Select a genre to find out</h2>
          <div>
            {Object.keys(topSongs).map((item) => (
              <button
                key={item}
                onClick={() => changeHandler(item)}
                style={{
                  background: select === item ? "#3498db" : "#2c3e50",
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="container container-center">
          <ol>
            {topSongs[select].map((list, index) => (
              <li key={index}>
                <div>
                  <span className="artist">Artist</span>: {list.artist}
                </div>
                <div>
                  <span className="song">Song</span>: {list.song}
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="footer">
          <p>Created with love by yoursweetnightmare</p>
        </div>
      </div>
    </div>
  );
}
