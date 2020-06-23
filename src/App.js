import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [api, setApi] = useState("");
  const [text, setText] = useState("");

  const onClick = () => {
    setApi("fetch");
    fetch("http://localhost:3000/")
      .then((res) => res.text())
      .then((response) => {
        console.log("response: ", response);
        setText(response);
        setApi("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" placeholder="Search" />
        <button onClick={onClick}>Submit</button>
        <p>{text}</p>
      </header>
    </div>
  );
}

export default App;
