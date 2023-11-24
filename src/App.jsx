import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Titlesection from './Components/Sections/Titlesection'
import Form from './Components/Formsection/Form/Form'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Titlesection/>}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App