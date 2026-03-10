import "./Footer.css"
import { Outlet } from "react-router-dom"

const Footer = () => {
  return (
    <div>
       <Outlet/>
        <footer>
          <h1>"footer"</h1>
        </footer>
    </div>
  )
}

export default Footer