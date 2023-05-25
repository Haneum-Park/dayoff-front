import React, { useId, useState } from 'react';

import Chevron from '@common/Icon/Chevron';

import type { ProxyRecord } from '@store/main/record';

import {
  ContentWrap,
  ContentTitle,
  ContentDescWrap,
  ContentListWrap,
  ContentDesc,
  ContentMemo,
  type ContentMemoProps,
} from './styles';

interface ContentAccordianProps extends ContentMemoProps {
  isAccordian?: boolean;
  contents: ProxyRecord['record'][keyof ProxyRecord['record']];
  target: keyof ProxyRecord['record'];
}

function ContentAccordian({
  isAccordian: initAccordian = false,
  target,
  contents,
  cursor: memoCursor,
}: ContentAccordianProps) {
  const uuid = useId();
  const [isAccordian, setIsAccordian] = useState(initAccordian ?? false);

  const onAccordian = () => {
    setIsAccordian((prev) => !prev);
  };

  return (
    <ContentWrap isAccordian={isAccordian}>
      <ContentTitle onClick={onAccordian}>
        <h2>{contents.title}</h2>
        <Chevron direction={isAccordian ? 'top' : 'down'} isAccordian={isAccordian} />
      </ContentTitle>
      <ContentDescWrap>
        {contents.list.map((item, idx) => (
          <ContentListWrap className={target} key={`content-${uuid}-${idx}`}>
            <ContentDesc>{item.desc}</ContentDesc>
            <ContentMemo cursor={memoCursor}>{item.memo}</ContentMemo>
          </ContentListWrap>
        ))}
      </ContentDescWrap>
    </ContentWrap>
  );
}

export default ContentAccordian;
