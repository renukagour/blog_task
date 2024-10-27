
import './App.css'
import AddBlog from './Components/AddBlog'
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'

function App() {
  

  return (
 
 <BrowserRouter>
 <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/create" element={<AddBlog />} />
 </Routes>
 </BrowserRouter>
  )
}

export default App
