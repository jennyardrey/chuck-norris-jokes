import React, { Component } from 'react';
import JokeCard from './JokeCard';
import '../styles/InfiniteJokes.css'

class InfiniteJokes extends Component {

	render() {
		return (
			<div className="infinite-jokes">
				<button className="joke-btn" onClick={this.props.manyJokes}><div className="infinite-btn-text">Infinite Jokes</div><i className="chevron" class="fas fa-chevron-circle-right"></i></button>
				<div>
					{
						this.props.jokes && this.props.jokes.length > 0 ?
							this.props.jokes.map(joke => (
								<JokeCard {...joke} />
							))
							: <div className="error">LOAD INFINITE JOKES</div>
					}
				</div>
			</div>
		)
	}
}


export default InfiniteJokes;