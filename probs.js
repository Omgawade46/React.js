import React from "react";
import ReactDOM from "react-dom";

function App() {
  return <Greeting name="Nathan"/>;
}

function Greeting(props) {
  return (
    <p>
      Hello! I'm {props.name}.
      Pleased to meet you!
    </p>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
