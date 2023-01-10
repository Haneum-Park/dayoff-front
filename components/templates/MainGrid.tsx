import React, { memo } from 'react';
import styled from 'styled-components';

import Jumbotron from '@organism/main/Jumbotron';
import type { JumbotronProps } from '@organism/main/Jumbotron';
import Header from '@organism/Header';
import type { HeaderProps } from '@organism/Header';
import ProjectRoller from '@organism/main/ProjectRoller';
import type { ProjectRollerProps } from '@organism/main/ProjectRoller';
import Footer from '@organism/Footer';

interface MainGridProps extends ProjectRollerProps {
  header: HeaderProps;
  jumbotron: JumbotronProps;
}

const MainGridLayout = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  > div {
    width: calc(760rem / 16);
  }
`;

const MainLeftGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: calc(64rem / 16) 0;
  margin-left: calc(108rem / 16);
`;

const MainRightGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: calc(108rem / 16);
`;

function MainGrid({ header, jumbotron, projects }: MainGridProps) {
  return (
    <MainGridLayout>
      <MainLeftGrid>
        <Header {...header} />
        <Jumbotron {...jumbotron} />
        <Footer />
      </MainLeftGrid>
      <MainRightGrid>
        <ProjectRoller projects={projects} />
      </MainRightGrid>
    </MainGridLayout>
  );
}

export default memo(MainGrid);
