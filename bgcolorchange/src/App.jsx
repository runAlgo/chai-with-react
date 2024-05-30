import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black") 


  return (
     <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 py-4'>
      <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-xl bg-white'>
        <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor: "red"}}>Red</button>
        <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor: "green"}}>Green</button>
        <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor: "blue"}}>Blue</button>
        <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor: "pink"}}>Pink</button>
        <button onClick={() => setColor("lime")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor: "lime"}}>Lime</button>
      </div>
      </div>
     </div> 
  )
}

export default App
