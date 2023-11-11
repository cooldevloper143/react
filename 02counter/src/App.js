import { useState} from "react";

function App() {
  var [counter, setCounter] = useState(15);
  // let counter = 1;

  var addValue = () => {
    // console.log("value added",Math.random());
    // setCounter = counter + 1
    // console.log(setCounter)
    // return counter;
    setCounter(counter+1);
  };
  var removevalue = () => {
    if (counter>=1) {
      setCounter(counter - 1);
      
    } else {
      setCounter(0)
    }
  };

  return (
    <>
      <h1>counter value project </h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removevalue}>reamove value</button>
    </>
  );
}

export default App;
