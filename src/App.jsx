import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Productlist from './component/Productlist'
import Productpage from './component/Productpage'
import Productcard from './component/Productcard'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Productlist/>
        <Routes>
          <Route path="/Productpage" element={<Productpage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
