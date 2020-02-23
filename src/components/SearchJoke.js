import React, { Component } from 'react';
import Axios from 'axios';
import JokeCard from './JokeCard';
import '../styles/SearchJoke.css'

class SearchJoke extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			nameJoke: ""
		}
	}
	searchName = event => {
		event.preventDefault();
		Axios.get(`http://api.icndb.com/jokes/random?firstName=${this.state.firstName}&lastName=${this.state.lastName}&exclude=[explicit]&escape=javascript`)
			.then(joke =>
				this.setState({ nameJoke: joke.data.value.joke })
			)
	}
	render() {
		return <div className="search-jokes">
			<div className="name-form">
				<input className="first-name" placeholder="First name..."
					onChange={e => this.setState({ firstName: e.target.value })}>
				</input>
				<input className="last-name"
					type="text" name="last-name" placeholder="Last name..."
					onChange={e => this.setState({ lastName: e.target.value })}></input>
			</div>
			{this.state.nameJoke && this.state.nameJoke.length > 0 ? <JokeCard joke={this.state.nameJoke} /> : <div className="error">Search 'facts' about yourself...</div>}
			<button className="joke-btn" onClick={this.searchName}><span className="search-btn-text">Search</span><i className="chevron" class="fas fa-chevron-circle-right"></i></button>
		</div>
	}
}

export default SearchJoke;