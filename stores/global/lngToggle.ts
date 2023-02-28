import { proxy } from 'valtio';

interface ProxyLngToggle {
  locale: 'ko' | 'en';
}

export const proxyLngToggle = proxy<ProxyLngToggle>({
  locale: 'ko',
});

export function setLngToggle(locale: 'ko' | 'en') {
  proxyLngToggle.locale = locale;
}
