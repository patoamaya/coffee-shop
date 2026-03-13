import Home from "./Home"
import products from '../../products'
import { useEffect, useState } from "react"

const HomeContainer = () => {
const [pasteleriaProducts, setPasteleriaProducts] = useState()
const [cafeteriaProducts, setCafeteriaProducts] = useState()

// console.log(products.cafeteria.map((product)=>setCafeteriaProducts(product)(console.log(product))))
useEffect(()=>{
  // console.log(products)
  setCafeteriaProducts(products.cafeteria)
  setPasteleriaProducts(products.pasteleria)
},[])
// setCafeteriaProducts(products.cafeteria)

console.log(cafeteriaProducts)
console.log(pasteleriaProducts)


// console.log(cafeteriaProducts?.map((product)=>console.log(product)))

  return (
    <div>
        <Home/>
    </div>
  )
}

export default HomeContainer