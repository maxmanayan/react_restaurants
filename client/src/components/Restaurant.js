const Restaurant = (props) => {
	const {name, review, rating, id} = props
	return (
		<div style={{border: "1px solid black", margin: "2em", background: "azure"}}>
      <h1>{name}:{id}</h1>
      <h1>{review}</h1>
      <h1>{rating}</h1>
    </div>
		
		
	)
}

export default Restaurant