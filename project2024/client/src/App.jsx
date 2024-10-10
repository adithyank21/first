import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import UserHome from './user/userhome'
import Usernav from './user/usernav'
import Userhome from './user/userhome'
import Sidebar from './user/sidebar'
import Feed from './user/feed'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Usernav/>
       {/* <br/> */}
       {/* <Sidebar/> */}
      <Userhome/>
      {/* <Feed/> */}
    </>
  )
}

export default App
