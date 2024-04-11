import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Productlist from './component/productlist/Productlist'
import Productpage from './component/productpage/Productpage'
import Productcard from './component/productcard/Productcard'

function App() {
  
  return (
    <>
      {/* <BrowserRouter> */}
        <Productlist />
        {/* <Routes>
          <Route path="/Productpage" element={<Productpage/>}/>
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
