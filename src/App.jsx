import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Index from './paginas/igreja/Index'
import IndexDbv from './paginas/dbv/Index'
import Especialidades from './paginas/dbv/Especialidades'
import QuizPage from './paginas/igreja/QuizPage'

function App(){
  const [menu, setMenu] = useState('dbv')

  return (
    <Router>
      <Navbar menu={menu} />
      <div className='container'>
        <Routes>
          <Route path="/" element={ <Index setMenu={setMenu} /> }></Route>
          <Route path="/quiz" element={ <QuizPage setMenu={setMenu} />} ></Route>

          <Route path="/desbravadores" element={ <IndexDbv setMenu={setMenu}/> }></Route>
          <Route path="/desbravadores/especialidades" element={ <Especialidades setMenu={setMenu} /> }></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App