import React from 'react';
import {shallow, mount} from 'enzyme';
import {SessionPage} from '../components/session-page';
import './setupTests';

describe('<SessionPage />', () => {
  it('Should render without crashing', () => {
    shallow(<SessionPage />);
  });
});