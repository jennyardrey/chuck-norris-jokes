import React, { Component } from 'react';
import JokeCard from './JokeCard';
import '../styles/RandomJoke.css'

class RandomJoke extends Component {
	render() {
		return (
			<div className="random-joke">
				{this.props.joke && this.props.joke.length > 0 ? <JokeCard joke={this.props.joke} /> : <div className="error"></div>}
				<button className="joke-btn" onClick={this.props.randomJoke}>Random Joke <i className="chevron fas fa-chevron-circle-right"></i></button>
			</div>
		)
	}
}

export default RandomJoke