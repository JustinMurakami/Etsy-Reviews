import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App.jsx';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders one <App /> component', () => {
    const wrapper = shallow(<App />);
    // expect(wrapper.find(ReviewsHeader)).toHaveLength(1);
    console.log(wrapper.debug());
  });
});
