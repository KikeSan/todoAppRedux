import React from 'react'

const itemTask = props => {
	console.log('itemTask--->' + props.title)

	return (
		<div className="item">
			<h3>{props.title}</h3>
			<p>{props.status}</p>
		</div>
	)
}
export default itemTask
