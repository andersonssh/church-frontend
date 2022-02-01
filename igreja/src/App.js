import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import Navbar from './layout/Navbar'

function App(){
  const [menu, setMenu] = useState('igreja')

  return (
    <Router>
      <Navbar menu={menu} />
      
    </Router>
  )
}

export default App