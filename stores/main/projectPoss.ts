import { proxy } from 'valtio';

export const proxyProjectPoss = proxy<number[]>([]);

export function setProjectPoss(projectPoss: number[]) {
  proxyProjectPoss.splice(0, proxyProjectPoss.length, ...projectPoss);
}
