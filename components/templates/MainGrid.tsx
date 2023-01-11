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
    width: 100%;
    max-width: calc(760rem / 16);
  }

  @media screen and (max-width: 1600px) {
    flex-direction: column;
    justify-content: flex-start;
    > div {
      width: calc(100% - 4rem);
      transition: opacity 0.5s ease-in-out;
    }
    &:hover {
      > div {
        transition: opacity 0.5s ease-in-out;
      }
      > div:first-child {
        opacity: 0;
      }
      > div:first-child:hover {
        opacity: 1;
        & + div {
          opacity: 0;
        }
      }
      > div:last-child {
        opacity: 1;
      }
    }
  }

  @media screen and (max-width: 1800px) {
    padding: 0 2rem;
    gap: 2rem;
  }
`;

const MainLeftGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: calc(64rem / 16) 0;

  @media screen and (max-width: 1600px) {
    margin: calc(32rem / 16) auto 0;
    z-index: 2;
  }
`;

const MainRightGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: calc(64rem / 16);
  @media screen and (max-width: 1600px) {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
    height: calc(100vh - 15%);
  }
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
