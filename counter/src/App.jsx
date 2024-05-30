import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    if(counter < 20) {

    setCounter(prevCounter => prevCounter + 1) 
    setCounter(prevCounter => prevCounter + 1) 
    setCounter(prevCounter => prevCounter + 1) 
    setCounter(prevCounter => prevCounter + 1) 

    }
  }
  const lessValue = () => {
  if(counter > 0) {

    setCounter(prevCounter => prevCounter - 1)
    setCounter(prevCounter => prevCounter - 1)
    setCounter(prevCounter => prevCounter - 1)
    setCounter(prevCounter => prevCounter - 1)

  }
  }

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>Add value {counter}</button>
     <br />
     <br />
     <button onClick={lessValue}>less value{counter}</button>
     <p>Added count: {counter}</p>
    </>
  )
}

export default App
