import Navbar from '../components/Navbar';
import React from 'react';
import { shallow } from 'enzyme';

describe('Navbar', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<Navbar />);
		expect(wrapper.exists()).toBeTruthy();

	});

	it('includes link to random joke section', () => {
		const wrapper = shallow(<Navbar />);
		const randomLink = wrapper.find('#random-joke');
		expect(randomLink.props().to).toBe('/');
	});
	it('includes link to search joke section', () => {
		const wrapper = shallow(<Navbar />);
		const randomLink = wrapper.find('#search-joke');
		expect(randomLink.props().to).toBe('/search-joke');
	});
	it('includes link to infinite joke section', () => {
		const wrapper = shallow(<Navbar />);
		const randomLink = wrapper.find('#infinite-jokes');
		expect(randomLink.props().to).toBe('/infinite-jokes');
	});
})
