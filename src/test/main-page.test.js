import React from 'react';
import {shallow, mount} from 'enzyme';
import MainPage from '../components/main-page';
import './setupTests';

describe('<MainPage />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<MainPage />);
  });
});