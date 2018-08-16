import React from 'react';
import {shallow, mount} from 'enzyme';
import ResultsPage from '../components/results-page';
import './setupTests';

describe('<ResultsPage />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<ResultsPage />);
  });
});