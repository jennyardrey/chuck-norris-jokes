import InfiniteJokes from '../components/InfiniteJokes';
import React from 'react';
import { shallow } from 'enzyme';
import JokeCard from '../components/JokeCard'

const props = {
	jokes: ["Chuck Norris can make a class that is both abstract and final.",
		"Nothing can escape the gravity of a black hole, except for Chuck Norris. Chuck Norris eats black holes. They taste like chicken."],
	manyJokes: jest.fn()
}


describe('InfiniteJokes', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<InfiniteJokes {...props} />);
		expect(wrapper.exists()).toBeTruthy();

	});
	it('Test click event', () => {
		const wrapper = shallow(<InfiniteJokes {...props} />);
		wrapper.find('.joke-btn').simulate('click');
		expect(props.manyJokes).toHaveBeenCalled();
	});
	it('renders the joke card if there are jokes in the props', () => {
		const wrapper = shallow(<InfiniteJokes {...props} />)
		expect(wrapper.containsMatchingElement(<JokeCard />)).toEqual(true);
	})
})

