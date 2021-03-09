import React from 'react'
import Restaurant from './Restaurant'

const Restaurants = (props) => {
	const {restaurants} = props
	
	const renderRestaurants = () => {
		return restaurants.map ( restaurant => <Restaurant key= {restaurant.id} {...restaurant}/>)
	}

		return (
			<>
			{renderRestaurants()}
			</>
		)
}




export default Restaurants