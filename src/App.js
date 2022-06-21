import React, { useState } from "react";

import "./App.css";

function App() {
  const [list, setList] = useState(["john", "tommy", "fred", "jimmy"]);

  return <div className="App">{list}</div>;
}

export default App;
