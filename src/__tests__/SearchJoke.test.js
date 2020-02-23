import SearchJoke from '../components/SearchJoke';
import React from 'react';
import { shallow } from 'enzyme';


describe('search joke', () => {

	it('that it renders a form', () => {
		const wrapper = shallow(<SearchJoke />);
		expect(wrapper.exists()).toBeTruthy();
	});
	it('the input field value is whatever it is written', () => {
		const wrapper = shallow(<SearchJoke />);

		wrapper.find('.first-name').simulate('change', {
			target: { name: 'first-name', value: 'Jenny' },
		});
		wrapper.find('.last-name').simulate('change', {
			target: { name: 'last-name', value: 'Ardrey' },
		});
		expect(wrapper.state().firstName).toBe('Jenny');
		expect(wrapper.state().lastName).toBe('Ardrey');
	});

});