import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import UserHome from './user/userhome'
import Usernav from './user/usernav'
import Userhome from './user/userhome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Usernav/>
       <br/>
      <Userhome/>
    </>
  )
}

export default App
