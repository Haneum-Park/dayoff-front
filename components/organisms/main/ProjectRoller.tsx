/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, memo } from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { setProjectPoss } from '@store/main/projectPoss';
import { setRollerScrollPos } from '@store/main/rollerScrollPos';

import { Project } from '@const/dummy/main/projects';

import ProjectCard from './ProjectCard';
import Resume from './Resume';
import { ProjectRollerWrap, ProjectWrap } from './styles';

export interface ProjectRollerProps {
  projects: Project[];
}

function ProjectRoller({ projects = [] }: ProjectRollerProps) {
  const onScroll = () => {
    if (document.querySelector('#roller')) {
      const rollerScrollPos = document.querySelector('#roller')?.scrollTop;
      setRollerScrollPos(rollerScrollPos as number);
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (document) {
      const projectPoss = projects.reduce((acc, _, index) => {
        const divRect = document
          .querySelector(`#triggercard${index}`)
          ?.getBoundingClientRect() as DOMRect;
        const divTOP = divRect.top;
        const divBTM = divRect.bottom;
        acc.push(((divBTM as number) + (divTOP as number)) / 2);
        return acc;
      }, [] as number[]);
      setProjectPoss(projectPoss);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProjectRollerWrap id='roller' onScroll={onScroll}>
      {projects.length > 0
        ? projects.map(({ img, card, resume }, index) => (
            <ProjectWrap key={`project-${index}`} id={`triggercard${index}`}>
              {img ? <Image {...img} /> : null}
              {card ? <ProjectCard {...card} /> : null}
              {resume ? <Resume {...resume} /> : null}
            </ProjectWrap>
          ))
        : null}
    </ProjectRollerWrap>
  );
}

export default memo(ProjectRoller);
