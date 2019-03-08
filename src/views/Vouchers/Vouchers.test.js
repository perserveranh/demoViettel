import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Vouchers from './Vouchers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Vouchers /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
