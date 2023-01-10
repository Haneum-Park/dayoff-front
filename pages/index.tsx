import React, { memo, useCallback } from 'react';
import type { NextPage } from 'next';
import { useSnapshot } from 'valtio';

import MainGrid from '@template/MainGrid';

import jumbotron from '@const/dummy/main/jumbotron';
import header from '@const/dummy/main/header';
import type { Project } from '@const/dummy/main/projects';
import { getResume } from '@const/dummy/resume';

import { setFocusMember, proxyFocusMember, resetFocusMember } from '@store/main/focusMember';
import { proxyRollerScrollPos } from '@store/main/rollerScrollPos';
import { proxyProjectPoss } from '@store/main/projectPoss';
import { proxyProjects, addProject, removeProject } from '@store/main/projects';

const Home: NextPage = () => {
  const { member } = useSnapshot(proxyFocusMember);
  const { pos } = useSnapshot(proxyRollerScrollPos);
  const projectPoss = useSnapshot(proxyProjectPoss);
  const { projects } = useSnapshot(proxyProjects);

  const onFocusMember = useCallback(
    (target: 'kanu' | 'xeoye') => {
      const currentPos = projectPoss
        .map((projectPos, index) => (pos < projectPos ? index : pos === 0 ? 0 : false))
        .filter((s) => s !== false)[0] as number;

      const resumeIdx = projects.findIndex(
        (p) =>
          (p.resume && p.resume.target === 'kanu') || (p.resume && p.resume.target === 'xeoye'),
      );
      if (resumeIdx !== -1) {
        removeProject(resumeIdx);
      }

      if (target === member) {
        resetFocusMember();
      } else {
        const resume = getResume(target);
        addProject({ resume }, currentPos + 1);
        setFocusMember(target);
      }
    },
    [member, pos, projectPoss, projects],
  );

  return (
    <MainGrid
      header={header}
      jumbotron={{
        ...jumbotron,
        groupBtn: {
          ...jumbotron.groupBtn,
          btns: [
            {
              children: 'dev.haneum.park',
              onClick: () => onFocusMember('kanu'),
              className: member === 'kanu' ? 'kanu' : '',
            },
            {
              children: 'uxui.seoye.kim',
              onClick: () => onFocusMember('xeoye'),
              className: member === 'xeoye' ? 'xeoye' : '',
            },
          ],
        },
      }}
      projects={projects as Project[]}
    />
  );
};
export default memo(Home);
