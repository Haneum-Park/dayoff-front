import { proxy } from 'valtio';

export interface ProxyHeaderLogoPos {
  top: number;
  left: number;
}

export const proxyHeaderLogoPos = proxy<ProxyHeaderLogoPos>({
  top: 0,
  left: 0,
});

export function setHeaderLogoPos(top: number, left: number) {
  proxyHeaderLogoPos.top = top;
  proxyHeaderLogoPos.left = left;
}
