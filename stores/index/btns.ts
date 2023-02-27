import { proxy } from 'valtio';

import type { BtnProps } from '@atom/Button';

export type ProxyBtns = {
  btns: BtnProps[];
};

export const proxyBtns = proxy<ProxyBtns>({
  btns: [
    {
      children: '2020',
      bdColor: 'gray-9',
      bdRadius: 32,
      isEffect: true,
      id: '2020',
    },
    {
      children: '2021',
      bdColor: 'gray-9',
      bdRadius: 32,
      isEffect: true,
      id: '2021',
    },
    {
      children: '2022',
      bdColor: 'gray-9',
      bdRadius: 32,
      isEffect: true,
      id: '2022',
    },
  ],
});
