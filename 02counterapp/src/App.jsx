import { useState } from 'react'
import './App.css'

function App() {
 
  let[counter,setCounter] = useState(15);
  // let counter = 15;

  const addValue = () =>{
        setCounter(counter + 1);
        console.log("cliked", counter);

  }

  const removeValue = () =>{
    setCounter(counter-1);
    console.log("cliked", counter);

  }

  return (
    <>

      <h1>Counter App</h1>

      <h2>counter value : {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
<br /><br />
      <button
      onClick={removeValue}
      >Remove value</button>

      <p>footer:{counter}</p>


      <p>{counter}</p>
    </>
  )
}

export default App;
