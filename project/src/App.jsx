import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PurchaseWebsite from './components/ex-useeffect'
import Headernav from './components/headernav'
import ExuseEffect from './components/ex-useeffect'
import Homepage from './components/homepage'
import Footer from './components/foot'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Headernav/>
    <Homepage/>
    <br></br>
     <ExuseEffect/>
     <Footer/>
        
    </>
  )
}

export default App
