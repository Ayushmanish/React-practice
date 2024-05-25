import React from "react";

function App() {
  const [heading, setHeading] = React.useState("");
  const [headingtext, setheadingtext] = React.useState("");

  function handleChange(event) {
    setHeading(event.target.value);
  }

  function handleClick() {
    setheadingtext(heading);
  }
  return (
    <div className="container">
      <h1>Hello {headingtext}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
//description of the above code
//first h1 is rendered with headingtext null and heading as null
//on every time I type inside text the handleChange() funtion is called and heading is updated.
//after finish typing at the end heading is updated with the final value
//now on clicking the submit, handleClick() is called and headingtext variable is updated with the heading value.
