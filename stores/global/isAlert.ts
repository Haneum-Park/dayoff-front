import { proxy } from 'valtio';

type ProxyAlert = {
  isAlert: boolean;
};

export const proxyAlert = proxy<ProxyAlert>({
  isAlert: false,
});

export function setOpenAlert() {
  proxyAlert.isAlert = true;
}

export function setCloseAlert() {
  proxyAlert.isAlert = false;
}
