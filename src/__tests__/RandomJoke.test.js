import RandomJoke from '../components/RandomJoke';
import JokeCard from '../components/JokeCard'
import React from 'react';
import { shallow, mount } from 'enzyme';

const props = {
	joke: "Chuck Norris can make a class that is both abstract and final.",
	randomJoke: jest.fn()
}

describe('RandomJoke', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<RandomJoke {...props} />);
		expect(wrapper.exists()).toBeTruthy();

	});


	it('Test click event', () => {
		const wrapper = shallow(<RandomJoke {...props} />)

		wrapper.find('.joke-btn').simulate('click');
		expect(props.randomJoke).toHaveBeenCalled();
	});

	it('renders a joke card when there is a joke in the props', () => {
		const wrapper = shallow(<RandomJoke {...props} />);
		expect(wrapper.containsMatchingElement(<JokeCard />)).toEqual(true);
	});


})