import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
	<div className="nav-bar" >
		<div className="nav">
			<Link className="link" id="random-joke" to="/" >Random Joke</Link>
			<Link className="link" id="search-joke" to="/search-joke" >Search Joke</Link>
			<Link className="link" id="infinite-jokes" to="/infinite-jokes" >Infinite Jokes</Link>
		</div>
		<h1><span id="chuck">Chuck</span> <span id="norris">Norris</span> <span id="jokes">Jokes</span></h1>
	</div>
)
export default Navbar;