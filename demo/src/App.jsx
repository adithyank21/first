import './App.css'
import Aboutpage from './components/aboutpage'
import Cardskerala from './components/cardskerala'
import Headernav from './components/headernav'
import Homepage from './components/homepage'
import Slider from './components/slider'
import {Routes,Route} from 'react-router-dom'
import { lazy, Suspense } from 'react'

function App() {
const Hpage =lazy(()=>import('./components/homepage') )
const Aboutpage =lazy(()=>import('./components/aboutpage'))
const Rpage =lazy(()=>import('./components/registerpage'))

  return (
    <>
         <Headernav/>
         <section>
          <Suspense fallback ={<div>loading....</div>}>
         <Routes>
         <Route path='/' element={<Hpage/>}></Route>

          <Route path='/about' element={<Aboutpage/>}></Route>
          <Route path='/register' element={<Rpage/>}></Route>

         </Routes>
         </Suspense>
        </section>
    </>
  )
}

export default App