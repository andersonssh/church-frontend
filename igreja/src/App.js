import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

function App(){
  const [menu, setMenu] = useState('igreja')

  return (
    <Router>
      <Navbar menu={menu} />
      <Footer />
    </Router>
  )
}

export default App