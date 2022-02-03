import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Index from './paginas/igreja/Index'
import IndexDbv from './paginas/dbv/IndexDbv'
import ContatoIgreja from './paginas/igreja/ContatoIgreja'
import ContatoDbv from './paginas/dbv/ContatoDbv'

function App(){
  const [menu, setMenu] = useState('dbv')

  return (
    <Router>
      <Navbar menu={menu} />
      <div className='container'>
        <Routes>
          <Route path="/" element={ <Index setMenu={setMenu} /> }></Route>
          <Route path="/contato" element={ <ContatoIgreja setMenu={setMenu} /> }></Route>

          <Route path="/desbravadores" element={ <IndexDbv setMenu={setMenu}/> }></Route>
          <Route path="/desbravadores/contato" element={ <ContatoDbv setMenu={setMenu} /> }></Route>
        </Routes>
      </div>
      

      <Footer />
    </Router>
  )
}

export default App