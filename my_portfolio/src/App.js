import "./App.css";
import FixedContent from "./Components/FixedContent";
import React, { useEffect, useState } from "react";
import MovingContent from "./Components/MovingContent";

function App() {
  return (
    <div className="main">
      <FixedContent />
      <MovingContent/>
    </div>
  );
}

export default App;
