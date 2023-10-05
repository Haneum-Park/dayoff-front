import React, { memo } from 'react';
import styled from 'styled-components';

import type { JumbotronProps } from '@organism/main/Jumbotron';
import type { HeaderProps } from '@organism/Header';
import type { ProjectRollerProps } from '@organism/main/ProjectRoller';

import MainLeftGrid from './MainLeftGrid';
import MainRightGrid from './MainRightGrid';

export interface MainGridProps extends ProjectRollerProps {
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
    }
    > div,
    > div .render {
      transition: opacity 0.5s ease-in-out;
    }
    &:hover {
      > div,
      > div .render {
        transition: opacity 0.5s ease-in-out;
      }
      > div:first-child {
        .render {
          opacity: 0;
        }
      }
      > div:first-child:hover {
        .render {
          opacity: 1;
        }
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

function MainGrid({ header, jumbotron, projects }: MainGridProps) {
  return (
    <MainGridLayout>
      <MainLeftGrid header={header} jumbotron={jumbotron} />
      <MainRightGrid projects={projects} />
    </MainGridLayout>
  );
}

export default memo(MainGrid);
