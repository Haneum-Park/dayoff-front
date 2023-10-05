import { proxy } from 'valtio';

import projects from '@const/dummy/main/projects';
import type { Project } from '@const/dummy/main/projects';

export interface ProxyProjects {
  projects: Project[];
}

export const proxyProjects = proxy<ProxyProjects>({
  projects,
});

export function addProject(project: Project, idx: number) {
  proxyProjects.projects.splice(idx, 0, project);
}

export function removeProject(idx: number) {
  proxyProjects.projects.splice(idx, 1);
}
