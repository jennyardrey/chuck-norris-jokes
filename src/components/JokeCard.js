import React from 'react';
import '../styles/JokeCard.css'

const JokeCard = (props) => {
	const {
		joke,
	} = props;


	return (
		<div className="single-joke" >
			<p>{joke}</p>
		</div >
	)
}

export default JokeCard