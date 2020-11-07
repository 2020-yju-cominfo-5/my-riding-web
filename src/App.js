import React from "react";
import { BrowserRouter } from "react-router-dom";
import TitleBar from "./components/navbar/TitleBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TitleBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
