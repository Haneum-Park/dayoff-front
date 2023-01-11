import React from 'react';
import styled from 'styled-components';

import { Body1 } from '@const/globalStyles';
import type { ProjectCard as IProjectCard } from '@const/dummy/main/projects';

import { MEDIA_QUERY } from '@util/design.util';

// eslint-disable-next-line no-empty-pattern
export default function ProjectCard({
  index = 1,
  title = 'Project Title',
  platform = ['web', 'app'],
  desc = 'Project Descriptiondsajdoiasjdo;asjd;odjsao;dja;odjas;odja;ojsod',
  specs = ['Ai', 'Ps', 'Ae', 'Xd', 'Zepline', 'Figma'],
}: IProjectCard) {
  return (
    <ProjectCardWrap>
      <div
        data-aos='fade-up'
        data-aos-anchor={`trigger-card-${index}`}
        // data-aos-anchor-placement='bottom-center'
      >
        <ProjectCardContainer>
          <ProjectIndex>{index.toString().padStart(2, '0')}</ProjectIndex>
          <ProjectCardUl>
            <li>
              <ProjectCardTitle>
                <Body1>{title}</Body1>
                <span>{platform.join(' / ')}</span>
              </ProjectCardTitle>
              <ProjectCardDesc>{desc}</ProjectCardDesc>
            </li>
            <li>{specs.join(' / ')}</li>
          </ProjectCardUl>
        </ProjectCardContainer>
      </div>
    </ProjectCardWrap>
  );
}

const ProjectCardWrap = styled.div`
  position: absolute;
  top: calc(100% - 8rem);
  left: 50%;
  width: 100%;
  height: calc(224rem / 16);
  border-radius: calc(16rem / 16);
  transform: translate(-50%, -50%);
  bottom: 0;
  /* overflow: hidden; */

  /* ${MEDIA_QUERY.max('mobile')} {
    height: initial;
  } */
`;

const ProjectCardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: top;
  width: 100%;
  max-width: calc(100% - 4rem);
  margin: 0 auto;
  height: calc(${224 - 32}rem / 16);
  border-radius: calc(16rem / 16);
  background-color: var(--color-black-9);
  overflow: hidden;
  padding: calc(16rem / 16);
  backdrop-filter: blur(5px);
  * {
    color: var(--color-white);
  }
  /* ${MEDIA_QUERY.max('mobile')} {
    height: initial;
  } */
`;

const ProjectIndex = styled.div`
  margin-right: calc(16rem / 16);
`;

const ProjectCardUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  li:last-child {
    margin-left: auto;
  }

  ${MEDIA_QUERY.max('tablet')} {
    max-width: calc(100% - 2rem);
  }
`;

const ProjectCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  margin-bottom: calc(8rem / 16);
  h5 {
    margin: 0;
  }
`;

const ProjectCardDesc = styled.div`
  width: 100%;
  max-width: calc(544rem / 16);
  overflow: hidden;
  word-wrap: break-word;

  ${MEDIA_QUERY.max('tablet')} {
    max-width: calc(100% - 4rem);
  }
`;
