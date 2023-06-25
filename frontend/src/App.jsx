import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './home'
import UpdateRecipt from './UpdateRecipt'
import AddRecipt from './AddRecipt'
import ViewRecipt from './ViewRecipt'
import NavBar from './navbar'

function App() {

  return (
    <div>
      <NavBar></NavBar>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/updateRecipt/:id' element={<UpdateRecipt></UpdateRecipt>}></Route>
        <Route path='/addRecipt' element={<AddRecipt></AddRecipt>}></Route>
        <Route path='/viewRecipt/:id' element={<ViewRecipt></ViewRecipt>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
