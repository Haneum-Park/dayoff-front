import React, { memo, useId, useState } from 'react';

import Chevron from '@common/Icon/Chevron';

import type { ProxyRecord } from '@store/main/record';

import { generateMasking } from '@util/common.util';

import {
  ContentWrap,
  ContentTitle,
  ContentDescWrap,
  ContentListWrap,
  ContentDesc,
  ContentMemo,
  ContentExtra,
} from './styles';

interface ContentAccordianProps {
  isAccordian?: boolean;
  contents: ProxyRecord['record'][keyof ProxyRecord['record']];
  target: keyof ProxyRecord['record'];
}

function ContentAccordian({
  isAccordian: initAccordian = false,
  target,
  contents,
}: ContentAccordianProps) {
  const uuid = useId();
  const [isAccordian, setIsAccordian] = useState(initAccordian ?? false);

  const onAccordian = () => {
    setIsAccordian((prev) => !prev);
  };

  const onRouter = (url?: string) => {
    if (url) {
      window.open(url, '_blank');
    }
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
            <ContentMemo route={!!item.route} onClick={() => onRouter(item.route)}>
              {/* // * 마스킹 부분 사용자 인증 후 개인번호 열람가능 */}
              {item.masking ? generateMasking(item.memo) : item.memo}
            </ContentMemo>
            {item.extra && item.extra.length > 0 && (
              <ContentExtra>
                {item.extra.map((extra, extraIdx) => (
                  <li key={`item-extra-${idx}-${extraIdx}`}>{extra}</li>
                ))}
              </ContentExtra>
            )}
          </ContentListWrap>
        ))}
      </ContentDescWrap>
    </ContentWrap>
  );
}

export default memo(ContentAccordian);
