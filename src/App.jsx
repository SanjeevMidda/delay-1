import { useState } from "react";
import "./index.css";

function App() {
  const [click, setClicked] = useState(true);

  // let styles = {
  //   animation: `${click ? "opacity 1s linear forwards" : undefined}`,
  // };

  let textStyles = {
    animation: `${
      click ? "delay 1s both linear" : "opacityOut 1s forwards linear"
    }`,
    // opacity: `${click ? "1" : "0"}`,
    // animationDelay: "2s",
  };

  return (
    <div className="App">
      <div className="box" onClick={() => setClicked(!click)}>
        <h1 style={textStyles}>hello</h1>
      </div>
    </div>
  );
}

export default App;
