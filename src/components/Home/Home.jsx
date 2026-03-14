import "./Home.css" 
import back from '../../assets/back.png'
const Home = ({data}) => {
  const {pasteleriaProducts, cafeteriaProducts} = data
  console.log(pasteleriaProducts)
  return (
    <div>
      <main>
        {/* <img src={back} alt="" /> */}
      </main>
    </div>
  )
}

export default Home