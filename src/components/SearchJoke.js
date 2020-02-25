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
		const isEnabled = this.state.firstName.length > 0 && this.state.lastName.length > 0
		const firstNameErr = !this.state.firstName
		const lastNameErr = !this.state.lastName

		return <div className="search-jokes">
			<div className="name-form">
				<input className={firstNameErr ? "error first-name" : "first-name"} placeholder="First name..."
					onChange={e => this.setState({ firstName: e.target.value })}>
				</input>
				<input className={lastNameErr ? "error last-name" : "last-name"}
					type="text" name="last-name" placeholder="Last name..."
					onChange={e => this.setState({ lastName: e.target.value })}></input>
			</div>
			{this.state.nameJoke && this.state.nameJoke.length > 0 ? <JokeCard joke={this.state.nameJoke} /> : <div className="error-msg">Please fill in both fields to search jokes</div>}
			<button disabled={!isEnabled} className="joke-btn" onClick={this.searchName}><span className="search-btn-text">Search</span><i className="chevron fas fa-chevron-circle-right"></i></button>
		</div>
	}
}

export default SearchJoke;