import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import { mount } from 'enzyme'
import Vouchers from './Vouchers';


it('renders without crashing', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Vouchers match={{params: {id: "1"}, isExact: true, path: "/users/:id", name: "User details"}}/>
    </MemoryRouter>
  );
  expect(wrapper.containsMatchingElement(<strong>Samppa Nori</strong>)).toEqual(true)
  wrapper.unmount()
});
