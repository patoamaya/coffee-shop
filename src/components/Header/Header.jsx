import './Header.css'
import logo from '../../assets/logo.png'
import { Outlet } from "react-router-dom"

const Header = () => {
  return (
  <div className='allContainer'>
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </header>
   <Outlet/>
  </div>
  )
}

export default Header

