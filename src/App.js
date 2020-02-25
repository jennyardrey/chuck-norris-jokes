import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchJoke from './components/SearchJoke';
import RandomJoke from './components/RandomJoke';
import Navbar from './components/Navbar';
import InfiniteJokes from './components/InfiniteJokes';
import Axios from 'axios';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			joke: "",
			jokes: []
		}
	}

	randomJoke = (event) => {
		event.preventDefault();

		Axios.get(`http://api.icndb.com/jokes/random?escape=javascript&exclude=[explicit]`)
			.then(joke =>
				this.setState({ joke: joke.data.value.joke })
			)
	}

	manyJokes = event => {
		event.preventDefault();
		Axios.get(`http://api.icndb.com/jokes/random/549?exclude=[explicit]&escape=javascript`)
			.then(joke =>
				this.setState({ jokes: joke.data.value })
			)
	}


	render() {
		return (
			<div className="App">
				<Navbar />
				<div className="main-content">
					<Switch>
						<Route
							exact path="/"
							render={props => (
								<RandomJoke {...props}
									joke={this.state.joke}
									randomJoke={this.randomJoke}
								/>
							)}
						/>
						<Route exact path="/search-joke"
							component={SearchJoke}
						/>
						<Route exact path="/infinite-jokes"
							render={props => (
								<InfiniteJokes {...props}
									jokes={this.state.jokes}
									manyJokes={this.manyJokes}
								/>
							)}
						/>
					</Switch>
				</div>
			</div>
		)
	}
}


export default App;
