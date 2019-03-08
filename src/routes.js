import React from 'react';
import DefaultLayout from './containers/DefaultLayout';


const Dashboard = React.lazy(() => import('./views/Dashboard'));
const VoucherCodes = React.lazy(() => import('./views/VoucherCodes/VoucherCodes'));
const VoucherCode = React.lazy(() => import('./views/VoucherCodes/VoucherCode'));

const Vouchers = React.lazy(() => import('./views/Vouchers/Vouchers'));
const Voucher = React.lazy(() => import('./views/Vouchers/Voucher'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/voucher-code', exact: true,  name: 'VoucherCodes', component: VoucherCodes },
  { path: '/voucher-code/:id', exact: true, name: 'VoucherCode Details', component: VoucherCode },
  { path: '/vouchers', exact: true,  name: 'Vouchers', component: Vouchers },
  { path: '/vouchers/:id', exact: true, name: 'Voucher Details', component: Voucher },
];

export default routes;
