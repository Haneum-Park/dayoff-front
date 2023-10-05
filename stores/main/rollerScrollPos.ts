import { proxy } from 'valtio';

export const proxyRollerScrollPos = proxy({
  pos: 0,
});

export function setRollerScrollPos(scrollPos: number) {
  proxyRollerScrollPos.pos = scrollPos;
}
