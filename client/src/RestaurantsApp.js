import {useState, useEffect} from "react";
import axios from "axios";

const RestaurantsApp = () => {
  const [restaurants, setRestaurants] = useState([])


  const getRestaurants = async () => {
    try {
      let res = await axios.get("/restaurants")
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }


  return(
    <div>
      <h1>Restaurants App Page</h1>
    </div>
  )
}



export default RestaurantsApp;