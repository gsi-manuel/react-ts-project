import * as React from 'react';
import { IRiftRoute, RiftRouter } from 'rift-router';
import { Table } from '../components/common/table/Table';
import { Radio } from '../components/common/radio/Radio';
import { Login } from '../components/common/login/Login';
import { Toggle } from '../components/common/toggle/Toggle';

const routes: IRiftRoute[] = [
  {
    path: '',
    component: () => <Table/>,
  },
  {
    path: '/radio',
    component: () => <Radio/>,
  },
  {
    path: '/login',
    component: () => <Login/>,
  },
  {
    path: '/toggle',
    component: () => <Toggle/>,
  },
];

const rout = new RiftRouter(routes);

export default rout;