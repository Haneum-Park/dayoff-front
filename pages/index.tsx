import React, { memo, useCallback } from 'react';
import type { NextPage } from 'next';
import { useSnapshot } from 'valtio';

import MainGrid from '@template/main/MainGrid';

import header from '@const/dummy/main/header';
import type { Project } from '@const/dummy/main/projects';
import { getResume } from '@const/dummy/resume';

import { setFocusMember, proxyFocusMember, resetFocusMember } from '@store/main/focusMember';
import { proxyRollerScrollPos } from '@store/main/rollerScrollPos';
import { proxyProjectPoss } from '@store/main/projectPoss';
import { proxyProjects, addProject, removeProject } from '@store/main/projects';
import { proxyDarkmode } from '@store/global/darkmode';

import TextLogoDark from '@image/logo/main/text-logo-dark.png';
import TextLogoWhite from '@image/logo/main/text-logo-white.png';

const Home: NextPage = () => {
  const { member } = useSnapshot(proxyFocusMember);
  const { pos } = useSnapshot(proxyRollerScrollPos);
  const projectPoss = useSnapshot(proxyProjectPoss);
  const { projects } = useSnapshot(proxyProjects);
  const { darkmode } = useSnapshot(proxyDarkmode);

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
        document
          .querySelector('#roller')
          ?.scrollTo(0, (projectPoss[currentPos + 1] as number) - 500);
      }
    },
    [member, pos, projectPoss, projects],
  );

  return (
    <MainGrid
      header={header}
      jumbotron={{
        img: {
          src: darkmode ? TextLogoWhite : TextLogoDark,
          alt: 'Jumbotron Logo',
          width: 700,
          height: 216.69,
        },
        groupBtn: {
          maxWidth: 'calc(180rem / 16)',
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
        desc: '안녕하세요. 우리는 데이오프 입니다. 우리는 같은 직장에서 만났고, 지금은 서로의 다른 목적을 위해 즐거운 웹 프로젝트를 제작하고 있습니다. 데이오프에서 저희의 멋진 프로젝트들을 볼 수 있습니다. 우리의 포트폴리오를 즐겨주세요.',
      }}
      projects={projects as Project[]}
    />
  );
};
export default memo(Home);
