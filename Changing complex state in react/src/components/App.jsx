// import React from "react";

// function App() {
//   const [heading1, setheading1] = React.useState("");
//   const [heading2, setheading2] = React.useState("");

//   function handleChange(event) {
//     setheading1(event.target.value);
//   }
//   function handleChange1(event) {
//     setheading2(event.target.value);
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {heading1} {heading2}
//       </h1>
//       <form>
//         <input onChange={handleChange} name="fName" placeholder="First Name" />
//         <input onChange={handleChange1} name="lName" placeholder="Last Name" />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

//the above code is the simpleir way of doing the challenge.
//But below is the precised way using objects

import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    const { value, name } = event.target; //object destructuring is used

    setFullName((prevValue) => {
      //preValue is itself an object which stores
      //the past values of fname and lname
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lname: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
