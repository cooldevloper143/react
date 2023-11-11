function App() {

  let counter = 1;

  const addValue = () => {
    // console.log("value added",Math.random());
    counter = counter + 1
    console.log(counter)
    return counter;
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button>reamove value</button>
    </>
  );
}

export default App;


