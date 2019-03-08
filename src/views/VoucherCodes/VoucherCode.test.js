import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import { mount } from 'enzyme'
import VoucherCode from './VoucherCode';


it('renders without crashing', () => {
  const wrapper = mount(
    <MemoryRouter>
      <VoucherCode match={{params: {id: "1"}, isExact: true, path: "/voucher-code/:id", name: "User details"}}/>
    </MemoryRouter>
  );
  expect(wrapper.containsMatchingElement(<strong>Samppa Nori</strong>)).toEqual(true)
  wrapper.unmount()
});
