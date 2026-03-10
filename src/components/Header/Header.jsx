import './Header.css'
import { Outlet } from "react-router-dom"

const Header = () => {
  return (
  <div className='allContainer'>
    <header>
      <h1>Header</h1>
    </header>
   <Outlet/>
  </div>
  )
}

export default Header