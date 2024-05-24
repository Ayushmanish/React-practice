import React from "react";

function App() {
  const [headingText, setheadingText] = React.useState("Hello");
  const [mouseover, setmouseover] = React.useState(false);

  function onclickEvent() {
    setheadingText("Submitted");
  }
  function onMouseOverEvent() {
    setmouseover(true);
  }
  function onMouseOutEvent() {
    setmouseover(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: mouseover ? "Black" : "white" }}
        onClick={onclickEvent}
        onMouseOver={onMouseOverEvent}
        onMouseOut={onMouseOutEvent}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
