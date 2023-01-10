import React from 'react';

import type { ProjectCard as IProjectCard } from '@const/dummy/main/projects';

import {
  ProjectCardWrap,
  ProjectCardContainer,
  ProjectCardUl,
  ProjectIndex,
  ProjectCardTitle,
  ProjectCardDesc,
} from './styles';

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
                <h5>{title}</h5>
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
