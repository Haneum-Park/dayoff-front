import React, { memo } from 'react';
import styled from 'styled-components';

import ProjectRoller from '@organism/main/ProjectRoller';
import type { ProjectRollerProps } from '@organism/main/ProjectRoller';

const MainRightGridWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: calc(64rem / 16) 0;
  @media screen and (max-width: 1600px) {
    position: absolute;
    top: 7%;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
    height: calc(100vh - 15%);
  }
`;

function MainRightGrid({ projects }: ProjectRollerProps) {
  return (
    <MainRightGridWrap>
      <ProjectRoller projects={projects} />
    </MainRightGridWrap>
  );
}

export default memo(MainRightGrid);
