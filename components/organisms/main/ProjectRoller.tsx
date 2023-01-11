/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, memo } from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';

import { setProjectPoss } from '@store/main/projectPoss';
import { setRollerScrollPos } from '@store/main/rollerScrollPos';

import { Project } from '@const/dummy/main/projects';

import { MEDIA_QUERY } from '@util/design.util';

import ProjectCard from './ProjectCard';
import Resume from './Resume';

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
              {img ? <Image {...img} priority={true} /> : null}
              {card ? <ProjectCard {...card} /> : null}
              {resume ? <Resume {...resume} /> : null}
            </ProjectWrap>
          ))
        : null}
    </ProjectRollerWrap>
  );
}

export default memo(ProjectRoller);

const ProjectRollerWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /*  Chrome, Safari, Opera */
  }
  gap: 3rem;
  @media screen and (max-width: 1600px) {
    height: 100%;
  }
`;

const ProjectWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: calc(760rem / 16);
  height: 100%;
  max-height: calc(760rem / 16);
  ${MEDIA_QUERY.max('mobile')} {
    height: calc(100vw - 4rem);
  }
  &::after {
    content: '';
    display: block;
    padding-bottom: 44%;
  }
  &:last-child {
    margin-bottom: calc(64rem / 16);
    /* &::after {
      padding-bottom: 0;
    } */
  }
  &,
  & > img {
    border-radius: calc(16rem / 16);
  }

  img {
    width: 100%;
    ${MEDIA_QUERY.max('mobile')} {
      height: 100% !important;
    }
  }
`;
