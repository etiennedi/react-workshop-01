import React from 'react';
import { shallow } from 'enzyme';

import { ContactForm } from './ContactForm';

describe('Main Form', () => {
  it('should render 5 Redux Form fields', () => {
    const component = shallow(<ContactForm />);
    expect(component.find('Field').length).toEqual(5);
  });
});
