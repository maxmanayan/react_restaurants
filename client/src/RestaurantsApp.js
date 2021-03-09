import {useState, useEffect} from "react";
import axios from "axios";
import Restaurants from './components/Restaurants'


const RestaurantsApp = () => {
  const [restaurants, setRestaurants] = useState([])


  const getRestaurants = async () => {
    try {
      let res = await axios.get("/api/restaurants")
      setRestaurants(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    getRestaurants()
  }, [])

	const renderPage = () => {
		return (
			 <Restaurants restaurants={restaurants} />
		)
	}

  return(
    <div>
      <h1>Restaurants App Page</h1>
			{renderPage()}
    </div>
  )
}



export default RestaurantsApp;