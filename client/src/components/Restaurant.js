const Restaurant = (props) => {
	const {name, review, rating, id} = props
	return (
		<>
		<h1>{name}:{id}</h1>
		<h1>{review}</h1>
		<h1>{rating}</h1>
		</>
	)
}

export default Restaurant