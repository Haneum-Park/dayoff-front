import { proxy } from 'valtio';

type ProxyFoldToggle = {
  foldToggle: boolean;
};

export const proxyFoldToggleState = proxy<ProxyFoldToggle>({
  foldToggle: false,
});

export function onFoldToggle() {
  proxyFoldToggleState.foldToggle = !proxyFoldToggleState.foldToggle;
}
