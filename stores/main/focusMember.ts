import { proxy } from 'valtio';

export interface ProxyFocusMember {
  member: 'kanu' | 'xeoye' | '';
}

export const proxyFocusMember = proxy<ProxyFocusMember>({
  member: '',
});

export function setFocusMember(member: ProxyFocusMember['member']) {
  proxyFocusMember.member = member === proxyFocusMember.member ? '' : member;
}

export function resetFocusMember() {
  proxyFocusMember.member = '';
}
