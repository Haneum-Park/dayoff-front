import React, { memo } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import Jumbotron from '@organism/Jumbotron';
import type { JumbotronProps } from '@organism/Jumbotron';
import Header from '@organism/Header';
import type { HeaderProps } from '@organism/Header';
import Footer from '@organism/Footer';

import SampleIMG1 from '@image/sample/1.jpg';
import SampleIMG2 from '@image/sample/2.jpg';
import SampleIMG3 from '@image/sample/3.jpg';
import SampleIMG4 from '@image/sample/4.jpg';
import SampleIMG5 from '@image/sample/5.gif';

interface MainGridProps {
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
  .scroll {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    div {
      width: calc(760rem / 16);
      height: calc(760rem / 16);
      margin: calc(24rem / 16) 0;
      &:first-child {
        margin-top: calc(64rem / 16);
      }
      &:last-child {
        margin-bottom: calc(64rem / 16);
      }
      &,
      & > img {
        border-radius: calc(16rem / 16);
      }
    }
  }
`;

function MainGrid({ header, jumbotron }: MainGridProps) {
  return (
    <MainGridLayout>
      <MainLeftGrid>
        <Header {...header} />
        <Jumbotron {...jumbotron} />
        <Footer />
      </MainLeftGrid>
      <MainRightGrid>
        <div className='scroll'>
          <div>
            <Image src={SampleIMG5} alt='sample 5' width={760} height={760} />
          </div>
          <div>
            <Image src={SampleIMG1} alt='sample 1' width={760} height={760} />
          </div>
          <div>
            <Image src={SampleIMG2} alt='sample 2' width={760} height={760} />
          </div>
          <div>
            <Image src={SampleIMG3} alt='sample 3' width={760} height={760} />
          </div>
          <div>
            <Image src={SampleIMG4} alt='sample 4' width={760} height={760} />
          </div>
        </div>
      </MainRightGrid>
    </MainGridLayout>
  );
}

export default memo(MainGrid);
