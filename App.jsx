
import { Route, Routes } from "react-router-dom"
import Navbar from"./components/Navbar"

import Home from "./Pages/Home/Home"
import Cart from "./Pages/Cart/Cart"
import PlaceOder from "./Pages/PlaceOrder/PlaceOrder"
const App = () => {
  return (
    <div className='app'>
      <Navbar/>

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/oder'element={PlaceOder}/>
     </Routes>
      
    </div>
  )
}

export default App
