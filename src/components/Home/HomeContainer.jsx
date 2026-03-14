import Home from "./Home"
import products from '../../products'
import { useEffect, useState } from "react"

const HomeContainer = () => {
const [pasteleriaProducts, setPasteleriaProducts] = useState([])
const [cafeteriaProducts, setCafeteriaProducts] = useState([])

useEffect(()=>{
  setCafeteriaProducts(products.cafeteria)
  setPasteleriaProducts(products.pasteleria)
},[])

// console.log(cafeteriaProducts)
// console.log(pasteleriaProducts)

let data = {
  pasteleriaProducts,
  cafeteriaProducts
}
  return (
    <div>
        <Home data={data}/>
    </div>
  )
}

export default HomeContainer