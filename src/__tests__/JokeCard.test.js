import JokeCard from '../components/JokeCard';
import React from 'react';
import { shallow } from 'enzyme';

const props = {
	joke: "Chuck Norris has never won an Academy Award for acting... because he's not acting."
}

describe('JokeCard', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<JokeCard />);
		expect(wrapper.exists()).toBeTruthy();

	});
	it('renders a joke when passed props', () => {
		const wrapper = shallow(<JokeCard {...props} />)
		const joke = wrapper.find('.single-joke');
		const jokeText = joke.text();
		expect(jokeText).toBe(props.joke)
	})
})
