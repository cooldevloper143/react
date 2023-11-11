// import logo from './logo.svg';
import "./App.css";
import Card from "./components/card";
function App() {
  let myObj = {
    username : "sarthka",
    age : 17,
  }
  let myArr = [ 1,2,3,4]
  return (
    <>
     <Card/>
     <Card username="chai aur code" someObj={myObj} someArr={myArr}/>
     <Card username="chai sutta bar"/>
     <Card username="btech chai wali"/> 
     

    </>
  );
}

export default App;
