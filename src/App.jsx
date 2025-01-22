import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Uno from './Components/Uno'
import Main from './Components/MainP'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Uno/>
      <Main/>
    </div>
  )
}

export default App
