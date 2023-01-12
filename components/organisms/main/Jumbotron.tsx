import React, { memo } from 'react';
import Image from 'next/image';
import type { ImageProps } from 'next/image';
import styled from 'styled-components';

import { Body1 } from '@const/globalStyles';
import GroupBtn from '@molecule/common/GroupBtn';
import type { GroupBtnProps } from '@molecule/common/GroupBtn';

import { MEDIA_QUERY } from '@util/design.util';

interface JumbotronStyleProps {}

export interface JumbotronProps {
  img: ImageProps;
  groupBtn: GroupBtnProps;
  desc: string;
}

function Jumbotron({ img, groupBtn, desc }: JumbotronProps & JumbotronStyleProps) {
  return (
    <JumbotronWrap className='render'>
      <JumbotronImgWrap>
        <Image {...img} alt='Jumbotron' priority={true} />
      </JumbotronImgWrap>
      <JumbotronDescWrap>
        <JumbotronPg>{desc}</JumbotronPg>
        <GroupBtn {...groupBtn} />
      </JumbotronDescWrap>
    </JumbotronWrap>
  );
}

export default memo(Jumbotron);

const JumbotronWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: calc(64rem / 16) 0 calc(32rem / 16);
  height: 100%;

  ${MEDIA_QUERY.max('mobile')} {
    margin: calc(32rem / 16) 0 calc(16rem / 16);
  }

  @media screen and (max-width: 1600px) {
    margin-top: 1rem;
  }
`;

const JumbotronImgWrap = styled.div`
  margin: 5rem 0;
  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 1600px) {
    margin: 0;
  }
`;

const JumbotronDescWrap = styled.div``;

const JumbotronPg = styled(Body1)`
  width: 100%;
  max-width: calc(608rem / 16);
  margin-top: calc(24rem / 16);
  margin-bottom: calc(16rem / 16);
`;
