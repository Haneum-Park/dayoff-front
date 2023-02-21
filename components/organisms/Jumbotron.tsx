import React, { memo } from 'react';
import Image from 'next/image';
import type { ImageProps } from 'next/image';
import styled from 'styled-components';

import GroupBtn from '@molecule/common/GroupBtn';
import type { GroupBtnProps } from '@molecule/common/GroupBtn';

interface JumbotronStyleProps {}

const JumbotronWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: calc(64rem / 16);
  height: 100%;
`;

const JumbotronImgWrap = styled.div``;

const JumbotronDescWrap = styled.div``;

const JumbotronPg = styled.p`
  width: 100%;
  max-width: calc(500rem / 16);
  margin-top: calc(24rem / 16);
`;

export interface JumbotronProps extends JumbotronStyleProps {
  img: ImageProps;
  groupBtn: GroupBtnProps;
}

function Jumbotron({ img, groupBtn }: JumbotronProps) {
  return (
    <JumbotronWrap>
      <JumbotronImgWrap>
        <Image {...img} alt='Jumbotron' />
      </JumbotronImgWrap>
      <JumbotronDescWrap>
        <GroupBtn {...groupBtn} />
        <JumbotronPg>
          이구역은텍스트입니다.이구역은텍스트입니다.이구역은텍스트입니다.이구역은텍스트입니다.이구역은텍스트입니다.이구역은텍스트입니다.이구역은텍스트입니다.이구역은텍스트입니다.
          이구역은텍스트입니다.이구역은텍스트입니다.이구역은텍스트입니다.이구역은텍스트입니다.이구역은텍스트입니다.이구역은텍스트입니다.
        </JumbotronPg>
      </JumbotronDescWrap>
    </JumbotronWrap>
  );
}

export default memo(Jumbotron);
