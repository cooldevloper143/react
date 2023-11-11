import { useState} from "react";

function App() {
  var [counter, setCounter] = useState(15);
  // let counter = 1;

  var addValue = () => {
    // console.log("value added",Math.random());
    // setCounter = counter + 1
    // console.log(setCounter)
    // return counter;
    setCounter(counter + 1);
  };
  var removevalue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removevalue}>reamove value</button>
    </>
  );
}

export default App;
