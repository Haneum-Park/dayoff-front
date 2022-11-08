import React, { memo } from 'react';
import styled from 'styled-components';
// import { useSnapshot } from 'valtio';

import Jumbotron from '@organism/Jumbotron';
import type { JumbotronProps } from '@organism/Jumbotron';
import Header from '@organism/Header';
import type { HeaderProps } from '@organism/Header';
import Footer from '@organism/Footer';

// import { proxyDarkmode } from '@store/global/darkmode';

// import { cookies } from '@util/common.util';

interface MainGridProps {
  header: HeaderProps;
  jumbotron: JumbotronProps;
}

const MainGridLayout = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  > div {
    width: calc(850rem / 16);
  }
`;

const MainLeftGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: calc(56rem / 16) calc(64rem / 16);
`;

const MainRightGrid = styled.div``;

function MainGrid({ header, jumbotron }: MainGridProps) {
  // const { darkmode } = useSnapshot(proxyDarkmode);

  // const onDarkmode = useCallback(() => {
  //   cookies.set('darkmode', darkmode ? '0' : '1');
  //   proxyDarkmode.darkmode = !darkmode;
  // }, [darkmode]);

  // useEffect(() => {
  //   const isDarkmode = cookies.get('darkmode');
  //   proxyDarkmode.darkmode = isDarkmode === '1';
  // }, []);

  return (
    <MainGridLayout>
      <MainLeftGrid>
        <Header {...header} />
        <Jumbotron {...jumbotron} />
        {/* <div>
            <button type='button' onClick={() => onDarkmode()}>
              {darkmode ? 'darkmode' : 'lightmode'}
            </button>
            <div>Home</div>
          </div> */}
        <Footer />
      </MainLeftGrid>
      <MainRightGrid></MainRightGrid>
    </MainGridLayout>
  );
}

export default memo(MainGrid);
