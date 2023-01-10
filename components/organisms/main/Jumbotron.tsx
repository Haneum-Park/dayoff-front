import React, { memo } from 'react';
import Image from 'next/image';
import type { ImageProps } from 'next/image';

import GroupBtn from '@molecule/common/GroupBtn';
import type { GroupBtnProps } from '@molecule/common/GroupBtn';

import { JumbotronDescWrap, JumbotronImgWrap, JumbotronPg, JumbotronWrap } from './styles';

interface JumbotronStyleProps {}

export interface JumbotronProps extends JumbotronStyleProps {
  img: ImageProps;
  groupBtn: GroupBtnProps;
  desc: string;
}

function Jumbotron({ img, groupBtn, desc }: JumbotronProps) {
  return (
    <JumbotronWrap>
      <JumbotronImgWrap>
        <Image {...img} alt='Jumbotron' />
      </JumbotronImgWrap>
      <JumbotronDescWrap>
        <JumbotronPg>{desc}</JumbotronPg>
        <GroupBtn {...groupBtn} />
      </JumbotronDescWrap>
    </JumbotronWrap>
  );
}

export default memo(Jumbotron);
