import { proxy } from 'valtio';

export interface ProxyOpenPPIconPos {
  top: number;
  left: number;
}

export const proxyOpenPPIconPos = proxy<ProxyOpenPPIconPos>({
  top: 0,
  left: 0,
});

export function setOpenPPIconPos(top: number, left: number) {
  proxyOpenPPIconPos.top = top;
  proxyOpenPPIconPos.left = left;
}
