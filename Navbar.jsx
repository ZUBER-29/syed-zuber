
import './Navbar.css'
import { assets } from '../assets/assets'
import { useState } from 'react'

const Navbar = () => {


 const [menu,setMenu] = useState ("Menu")

      return (
      <div className='Navbar'> 
      <img src={ assets.logo} alt="" className="logo" />
      <ul className="Navbar-menu">    
    <li onClick={()=>setMenu ("Home")} className={menu === "Home"?"active":""}>Home</li>
    <li onClick={()=>setMenu ("contact")}className={menu ==="contact"?"active":""}>contact</li>
    <li onClick={()=>setMenu ("Menu")}className={menu ==="Menu"?"active":""}>Menu</li>
    <li onClick={()=>setMenu ("Mobile-App")}className={menu ==="Mobile-App"?"active":""}>Mobile-App</li> 
  </ul>
  <div className="Navbar-right">
    <img src={assets.search_icon} alt=""/>
    <div className="Navbar-search-icon">
        <img src={assets.basket_icon} alt="" />
        <div className="Dot"></div>
    </div>
    <button>Sign-in</button>
  </div>  
</div>
  )
}

export default Navbar